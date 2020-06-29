let primeNum = [],
    input = prompt('enter number');

for (let i = 2; i <= Number(input) ** 2; i = i + 1) {

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

console.log(primeNum)