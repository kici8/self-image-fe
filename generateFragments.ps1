$basePath = $PSScriptRoot
$outputFile = Join-Path -Path $basePath -ChildPath "fragments.generated.ts"

# Apro lo stream (overwrite=true)
$stream = New-Object System.IO.StreamWriter($outputFile, $false)

# Scrive le definizioni e l'apertura dell'array
$stream.WriteLine("// I dati in questo file vengono generati automaticamente con lo script generateFragments.ps1")
$stream.WriteLine("export type ClusterFragment = {")
$stream.WriteLine("  id: string;")
$stream.WriteLine("  cluster_id: string;")
$stream.WriteLine("  image_id: string;")
$stream.WriteLine("  url: string;")
$stream.WriteLine("};")
$stream.WriteLine("")
$stream.WriteLine("type ClusterFragmentList = ClusterFragment[];")
$stream.WriteLine("")
$stream.WriteLine("export const staticClusterFragments: ClusterFragmentList = [")

$folders = @(
  "public/cluster-images/fragments/A",
  "public/cluster-images/fragments/B",
  "public/cluster-images/fragments/C",
  "public/cluster-images/fragments/D",
  "public/cluster-images/fragments/E",
  "public/cluster-images/fragments/F"
)

foreach ($folder in $folders) {
  $currentFolder = Join-Path -Path $basePath -ChildPath $folder
  $pathParts = $folder -split "/"
  $clusterId = $pathParts[$pathParts.Length - 1]

  $files = Get-ChildItem -Path $currentFolder -Filter *.png
  foreach ($file in $files) {
    $filename = $file.Name
    $id = $filename -replace "\.png$", ""
    $parts = $id -split "\."
    if ($parts.Length -ge 2) {
      $imageId = "$($parts[0]).$($parts[1])"
    }
    else {
      $imageId = $id
    }

    $stream.WriteLine("  {")
    $stream.WriteLine("    id: `"$id`",")
    $stream.WriteLine("    cluster_id: `"$clusterId`",")
    $stream.WriteLine("    image_id: `"$imageId`",")
    $stream.WriteLine("    url: `"/cluster-images/fragments/$clusterId/$filename`",")
    $stream.WriteLine("  },")
  }
}

$stream.WriteLine("];")
$stream.Close()