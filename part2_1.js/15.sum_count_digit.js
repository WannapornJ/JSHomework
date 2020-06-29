let sum = 0;

for (let i = 1; i <= 4129980; i++) {
    sum += Number(i.toString().length)
}

console.log(sum)