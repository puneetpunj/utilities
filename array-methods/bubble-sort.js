const arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

const sort = arr => {
    let done = false
    while (!done) {
        done = true
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { //3,2
                done = false;
                tmp = arr[i] //3
                arr[i] = arr[i + 1] // 0-2
                arr[i + 1] = tmp
            }
        }
    }
    return arr;
}

console.log(sort(arr1))