const arr2 = [1, 3, 5, 7, 9, 11, 15, 17, 19, 23]
const reverse = (arr, num = 1) => {
    const length = arr.length;
    const endpoints = Math.floor(length / num)
    console.log({ length, endpoints })
    const e = [...Array(endpoints).keys()].map(i => length - (num * (i + 1) - 1)).sort()
    console.log(e)
    e[e.length - 1] !== length ? e.push(length - 1) : e
    const final = []
    let end = 0;
    for (i = 0; i < e.length; i++) {
        for (j = e[i]; j >= end; j--) {
            final.push(arr[j])
        }
        end = e[i] + 1
    }
    return final;
}

console.log(reverse(arr2, 2))