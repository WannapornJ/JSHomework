let sum = Number("")
for (let i = 1; i < 18955; i = i + 2) {
    sum += i - (i + 1)
}
console.log(`total = ${sum}`)