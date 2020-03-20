cat test.csv | while read line; do
  IFS=\; read -ra COL <<< "$line"
  echo "${COL[0]};${COL[1]};${COL[2]};${COL[3]};${COL[4]};"
done
