const arr = [1, 0, 22, 0, 3, 0, 5, 6, 7]

const bubbleSort = arr => {
    let done = false
    while (!done) {
        done = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) { //3,2
                done = false;
                tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
            }
        }
    }
    return arr;
}

const findSumProduct = arr => {
    let acc = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        const sum = arr[i] + arr[i + 1]
        acc = acc > sum ? acc : sum
    }
    return acc;
}

// console.log(findSumProduct(arr));
const moveZerosToEnd = arr => {
    const newarr = []
    const zerosarr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] === 0 ? zerosarr.push(arr[i]) : newarr.push(arr[i])
    }
    return newarr.concat(zerosarr)
}
console.log(moveZerosToEnd(arr))


const pr = num => num % 32 === 0 ? 'ANIMAL' : num % 16 === 0 ? 'ANIMA' : num % 8 === 0 ? 'AN' : ''

const subOneNumber = arr => arr.map(num => num % 2 === 0 ? num - 1 : num)

// console.log(subOneNumber(arr))


const arr2 = [1, 3, 5, 7, 9, 11, 15, 17, 19, 23]
const reverse = (arr, num = 1) => {
    const length = arr.length;
    const endpoints = Math.floor(length / num)
    const e = [...Array(endpoints).keys()].map(i => length - (num * (i + 1) - 1)).sort()
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

// console.log(reverse(arr2, 3))

// console.log(mergeSort(arr))

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

// Merge the two arrays: left and right
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const ispalindrome = str => str.split('').reverse().join('') === str

const findNearestPalindrome = num => {
    let done = false;
    let nearest;
    inc = num + 1
    dec = num - 1
    while (!done) {
        nepi = ispalindrome((inc).toString())
        nepd = ispalindrome((dec).toString())
        if (nepi) {
            done = true
            nearest = inc
        }
        if (nepd) {
            done = true
            nearest = dec
        }
        inc++;
        dec--;
    }
    return nearest
}

console.log(findNearestPalindrome(130))