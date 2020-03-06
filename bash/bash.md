### How to replace double quotes in a file and create new file with replaced content -

```
sed "s/\"//g" file > newfile
```

### How to change last modified date

```
touch -a -m -t 202002190130.09 fileName.ext
```

### Check last modified date of file

```
date -r <filename>
```

### Keep only required column (1,2,3 in below example) from csv file and create new file

```
cut -d, -f1-3 0202.1.csv > 0202.2.csv
```
