let input = prompt('enter number'),
    sum = 0,
    i = 0,
    avg = 0;

while (input != "stop") {
    sum += Number(input)
    i++
    avg = sum / i
    if (input == "stop") {
        break
    }
    input = prompt('enter next number')
}
console.log(`average : ${avg}`)