function maxPossibleNumber(number) {
    let arr = String(number).split(""),
        dotId = 0,
        result = "",
        newArr;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(".", 0)) {
            if (arr[i] === ".") {
                dotId = i
                newArr = arr.slice(0, dotId).concat(arr.slice(dotId + 1, arr.length))
                newArr.sort((a, b) => b - a).splice(dotId, 0, ".")
                for (let j = 0; j < newArr.length; j++) {
                    result += newArr[j]
                }
                return `max possible value of ${number} is ${result}`
            }
        } else {
            newArr = arr.sort((a, b) => b - a)
            for (let j = 0; j < newArr.length; j++) {
                result += newArr[j]
            }
            return `max possible value of ${number} is ${result}`
        }
    }
}

console.log(maxPossibleNumber(123.45))