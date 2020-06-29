let primeNum = [],
    input = prompt('enter number'),
    total = 0

for (let i = 2; i <= 9000; i = i + 1) {

    let notPrime = false
    for (let j = 2; j <= i; j = j + 1) {
        if (i % j == 0 && j !== i) {
            notPrime = true
        }
    }
    if (notPrime === false) {
        primeNum.push(i)
    }
}

primeNum.length = Number(input)

for (let k = 0; k < primeNum.length; k++) {
    total += primeNum[k]
}
console.log(total)