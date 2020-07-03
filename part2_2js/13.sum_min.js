function minPairSum(array) {
    let oldArray = array.map(number => number)
    
    array.sort((a, b) => a - b)
    let result = array[0] + array[1]
    return `min value of sum from [${oldArray}] = ${result}`
}

console.log(minPairSum([6,8,3,2,5,6]))