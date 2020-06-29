let input = prompt('enter number'),
    storage = []

while (input !== "stop") {
    if (input === "stop") {
        break;
    } else {
        storage.push(Number(input))
    }
    input = prompt('enter next number')
}

let bool = prompt('enter true or false'),
    result;

if (bool === "true") {
    result = storage.sort((a, b) => a - b)
} else if (bool === "false") {
    result = storage.sort((a, b) => b - a)
} else {
    result = "error"
}

console.log(result)