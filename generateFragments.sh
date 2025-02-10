#!/bin/bash
# filepath: /c:/Users/artus/Documents/websites/self-image/self-image-fe/public/cluster-images/fragments/generateFragments.sh

OUTPUT_FILE="fragments.generated.ts"
# TODO: test this script
# Inizializza il file di output con le definizioni di tipo e l'apertura dell'array
echo "// I dati in questo file vengono generati automaticamente con lo script generateFragments.ps1" > "$OUTPUT_FILE"
echo "type ClusterFragment = {" >> "$OUTPUT_FILE"
echo "  id: string;" >> "$OUTPUT_FILE"
echo "  cluster_id: string;" >> "$OUTPUT_FILE"
echo "  image_id: string;" >> "$OUTPUT_FILE"
echo "  url: string;" >> "$OUTPUT_FILE"
echo "};" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "type ClusterFragmentList = ClusterFragment[];" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"
echo "export const clusterFragments: ClusterFragmentList = [" >> "$OUTPUT_FILE"

# Cicla per ogni cartella (A, B, C, D, E e F)
for folder in public/cluster-images/fragments/{A,B,C,D,E,F}; do
  clusterId=$(basename "$folder")
  # Per ogni file jpg nella cartella corrente
  for filepath in "$folder"/*.png; do
    filename=$(basename "$filepath")
    # Rimuove l'estensione .jpg per ottenere l'id (es: a.1.3)
    id="${filename%.jpg}"
    # Estrae imageId prendendo le prime due parti dell'id separate dal punto
    IFS='.' read -r part1 part2 _ <<< "$id"
    imageId="${part1}.${part2}"

    echo "  {" >> "$OUTPUT_FILE"
    echo "    id: \"$id\"," >> "$OUTPUT_FILE"
    echo "    cluster_id: \"$clusterId\"," >> "$OUTPUT_FILE"
    echo "    image_id: \"$imageId\"," >> "$OUTPUT_FILE"
    echo "    url: \"/cluster-images/fragments/$clusterId/$filename\"," >> "$OUTPUT_FILE"
    echo "  }," >> "$OUTPUT_FILE"
  done
done

echo "];" >> "$OUTPUT_FILE"