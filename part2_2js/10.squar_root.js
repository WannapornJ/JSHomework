function squareRoot(num) {
    let result = 0,
        root = 0,
        initial = Math.floor(num ** (1 / 2));
    
    for (let i = initial; i > 0; i--) {
        if (i ** 2 === num) {
            result = i
            return result
        }
        
        if (i ** 2 < num && num % i ** 2 === 0) {
            root = num / i ** 2
            if (i === 1) return `root${num} = root ${root}`
            return `root ${num} = ${i} root ${root}`
        }
        
    }
}

console.log(squareRoot(12))