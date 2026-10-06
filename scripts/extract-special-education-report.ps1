param(
  [Parameter(Mandatory = $true)][string]$InputPath,
  [Parameter(Mandatory = $true)][string]$OutputPath
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::OpenRead($InputPath)
try {
  $entry = $zip.GetEntry('word/document.xml')
  if (-not $entry) { throw 'word/document.xml não encontrado.' }

  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { [xml]$xml = $reader.ReadToEnd() } finally { $reader.Dispose() }

  $ns = [System.Xml.XmlNamespaceManager]::new($xml.NameTable)
  $ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
  $tables = $xml.SelectNodes('//w:tbl', $ns)
  $records = @()

  foreach ($table in $tables) {
    $rows = $table.SelectNodes('./w:tr', $ns)
    if ($rows.Count -lt 2) { continue }
    $header = @($rows[0].SelectNodes('./w:tc', $ns) | ForEach-Object {
      (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join ' ').Trim()
    })
    if ($header.Count -ne 5 -or $header[0] -ne 'Estudante' -or $header[1] -ne 'Unidade escolar') { continue }

    for ($index = 1; $index -lt $rows.Count; $index++) {
      $cells = @($rows[$index].SelectNodes('./w:tc', $ns) | ForEach-Object {
        (($_.SelectNodes('.//w:t', $ns) | ForEach-Object { $_.InnerText }) -join ' ').Trim()
      })
      if ($cells.Count -ge 5) {
        $records += [pscustomobject]@{
          name = $cells[0]
          escola = $cells[1]
          polo = $cells[2]
          turma = $cells[3]
          situacao = $cells[4]
        }
      }
    }
  }

  if ($records.Count -ne 59) { throw "Esperados 59 registros DEF/HD; encontrados $($records.Count)." }
  $json = $records | ConvertTo-Json -Depth 3
  [System.IO.File]::WriteAllText($OutputPath, $json, [System.Text.UTF8Encoding]::new($false))
  Write-Output "records=$($records.Count) output=$OutputPath"
}
finally {
  $zip.Dispose()
}
