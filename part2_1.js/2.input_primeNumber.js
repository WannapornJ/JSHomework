let primeNum = []
let input = prompt('enter number')

for (let i = 2; i <= input; i = i + 1) {

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

console.log(primeNum)