const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const findMostFrequentItem = arr => {
    const json = arr.reduce((acc, i) => {
        acc[i] = acc[i] + 1 || 1
        return acc
    }, {})
    const highestValue = Object.keys(json).reduce((acc, i) => {
        return acc > json[i] ? acc : { [i]: json[i] }
    }, 0)
    return highestValue
}

console.log(findMostFrequentItem(arr1))