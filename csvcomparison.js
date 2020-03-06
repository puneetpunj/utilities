const fs = require('fs');
const generateDeltaFile = (pathToBaseFile, pathToFileForComparison, pathForOutputFileName = './difference.csv') => {
    let internFile = "", externFile = '', changedLine = ''
    return new Promise((resolve, reject) => {
        const rs = fs.createReadStream(pathToBaseFile)
        rs
            .on('data', function (chunk) {
                internFile = internFile + chunk
            })
            .on('end', function () {
                const rs1 = fs.createReadStream(pathToFileForComparison)

                rs1
                    .on('data', function (data) {
                        externFile = externFile + data
                    })
                    .on('end', function () {
                        let internLines = internFile.toString().split('\n');
                        let externLines = externFile.toString().split('\n');

                        let externLookup = {};   //Added line
                        externLines.forEach(function (eLine) {   //Added line

                            externLookup[eLine.replace('\r', '')] = true;         //Added line
                        });

                        internLines.forEach(function (iLine) {
                            let internCells

                            internCells = iLine;

                            if (!externLookup[internCells]) {  //Changed line
                                changedLine = changedLine + iLine + '\n'
                            }
                        })

                        fs.writeFileSync(pathForOutputFileName, changedLine)
                        resolve('DONE')
                    })
            })
    })
}

(async () => {
    console.log(await generateDeltaFile('./base.csv', './comparisonAgainst.csv'))
})()