const isPrime = num => ![...Array(num).keys()].slice(2, Math.sqrt(num) + 1).map(i => num % i === 0).includes(true) && ![0, 1].includes(num)

const primenum = [...Array(100).keys()].map(i => r = { [i]: isPrime(i) })

console.log(primenum)
