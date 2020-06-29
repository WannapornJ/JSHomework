let input = 4,
    total = 0;

for (let i = 1; i <= Number(input); i++) {
    for (let j = 0; j < i; j++) {
        total += i
    }
}

console.log(total)