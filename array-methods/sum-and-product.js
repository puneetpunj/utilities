const arr = [1, 2, 3, 5, 6, 7]

const sumAndProduct = arr => {
    let sum = 0;
    let prod = 1
    arr.forEach(i => {
        sum = sum + i
        prod = prod * i
    })
    return { sum, prod }
}

console.log(sumAndProduct(arr))