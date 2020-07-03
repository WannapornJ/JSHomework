function calculateInterest(money, years) {
    let principal = money
    
    for (let year = 0; year < years; year++){
        money = (money + money * (2.5/100))
    }
    
    return `principal = ${principal} 
    number of deposit years = ${years} years
    account balance = ${money}`
}

console.log(calculateInterest(15126, 14))