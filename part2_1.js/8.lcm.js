let input = prompt('enter number'),
    storage = [];

while (input !== "stop" && input !== "") {
    if (input === "stop" || input === "") {
        break;
    } else {
        storage.push(Number(input))
    }
    input = prompt('enter next number')
}

let newStorage = storage.sort((a, b) => a - b)

function lcm(arr) {
    let count = 0,
        result,
        maxNum = arr[arr.length - 1];
    
    while (true) {
        for (let i = 0; i < arr.length; i += 1) {
            if (maxNum % arr[i] == 0) {
                count += 1
                result = maxNum
            }
        }
        if (count == arr.length) {
            return result
        }
        count = 0
        maxNum += 1
    }
}


console.log(storage)
console.log(lcm(storage))