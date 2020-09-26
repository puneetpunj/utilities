const string = 'The Quick Brown Fox'
const swapCase = string => {
    const final = []
    for (let i = 0; i < string.length; i++) {
        string[i] === string[i].toLowerCase() ? final.push(string[i].toUpperCase()) : final.push(string[i].toLowerCase())
    }
    return final.toString().replace(/,/g, '')
}

console.log(swapCase(string))