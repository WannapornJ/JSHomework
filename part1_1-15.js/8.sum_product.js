let sum = Number("")
for (let i = 1; i < 156; i = i + 2) {
    sum += (i) * (i + 2) * (i + 4)
}
console.log(`total = ${sum}`)