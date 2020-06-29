let input = prompt('enter factorial number that you want sum all digit but it must less than 19'),
    sumFact = 1,
    sumStore = [],
    total = 0;

for (let i = 1; i <= input; i++) {
    sumFact = sumFact * i
}
sumStore.push(sumFact.toString().split("").map(num => total += Number(num)))


let id = sumStore[0].length - 1
if (input > 18) {
    console.log("error")
} else {
    console.log(sumStore[0][id])
}