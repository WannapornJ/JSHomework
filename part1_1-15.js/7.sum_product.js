let num = Number("")
for (let i = 1; i <= 89; i++) {
    num += i * (i + 1) * (i + 2)
}
console.log(`total = ${num}`)