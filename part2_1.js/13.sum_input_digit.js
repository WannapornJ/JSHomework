let input = prompt('enter number'),
    store = [],
    total = 0;

while (input !== "stop") {
    if (input === "stop") {
        break;
    } else {
        store.push(input)
    }
    input = prompt('enter next number')
}
for (let i = 0; i < store.length; i++) {
    total += store[i].split("").reduce((a, b) => Number(a) + Number(b), 0)
}

console.log(total)