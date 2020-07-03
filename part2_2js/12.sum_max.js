function maxPairSum(array) {
    let oldArr = array.map(number => number)
    
    array.sort((a, b) => b - a)
    let result = array[0] + array[1]
    return `max value of sum from [${oldArr}] = ${result}`
}

console.log(maxPairSum([1,2,3,4,5,6,7,8,9,10]))