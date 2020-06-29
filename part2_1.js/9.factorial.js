let input = prompt('enter factorial number that you want to calculate'),
    total = 1;

for (let i = 1; i <= input; i++) {
    total = total * i
}

console.log(total)