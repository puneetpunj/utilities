const color = ["Blue", "blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

const removeDuplicates = arr => {
    const final = []
    arr.forEach(i => {
        final.includes(i) ? final : final.push(i)
    })
    return final;
}
console.log(removeDuplicates(color))