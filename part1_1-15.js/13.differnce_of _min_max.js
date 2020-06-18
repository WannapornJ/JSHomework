let input = prompt('enter number'),
    max = -Infinity,
    min = Infinity,
    sum = 0;

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
sum = max - min
console.log(`sum of difference is ${sum}`)