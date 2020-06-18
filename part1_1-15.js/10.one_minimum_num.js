let input = prompt('enter number'),
    num = Infinity

while (input !== "stop") {
    if (Number(input) < num) {
        num = Number(input)
    }
    input = prompt('enter next number')
    if (input == "stop") {
        break
    }
}

console.log(`minimum number is ${num}`)