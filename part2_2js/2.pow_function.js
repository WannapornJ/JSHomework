function pow(num, n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= num
    }
    return `${num} square ${n} = ${result}`
}

console.log(pow(25,2))