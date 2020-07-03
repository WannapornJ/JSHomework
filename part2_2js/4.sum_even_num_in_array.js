function evenArraySum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result += arr[i]
        }
    }
    return `sum of even = ${result}`
}

console.log(evenArraySum([5,8,6,7,1]))