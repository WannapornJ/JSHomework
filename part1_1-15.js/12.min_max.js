let input = prompt('enter number'),
    max = -Infinity,
    min = Infinity;

while (input !== "stop") {
    if (Number(input) < min) {
        min = Number(input)
    }
    if (Number(input) > max) {
        max = Number(input)
    }
    input = prompt('enter next number')
    if (input == "stop") {
        break
    }
}

console.log(`minimum number is ${min}, maximum number is ${max}`)