let first = 0,
    second = 1,
    input = Number(prompt('enter number')),
    next = 1;
for (let i = 2; i < input; i++) {
    next = first + second
    first = second
    second = next
}
console.log(`output = ${next}`)