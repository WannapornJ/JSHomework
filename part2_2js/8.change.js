function toChange(money) {
    let result1 = money - 1000 * (Math.trunc(money / 1000)),
        result2 = result1 - 500 * (Math.trunc(result1 / 500)),
        result3 = result2 - 100 * (Math.trunc(result2 / 100)),
        result4 = result3 - 50 * (Math.trunc(result3 / 50)),
        result5 = result4 - 20 * (Math.trunc(result4 / 20)),
        result6 = result5 - 10 * (Math.trunc(result5 / 10)),
        result7 = result6 - 5 * (Math.trunc(result6 / 5)),
        result8 = result7 - 2 * (Math.trunc(result7 / 2)),
        result9 = result8 - 1 * (Math.trunc(result8 / 1));

    return (`${money} บาท = 
    แบงค์    1000    ${Math.trunc(money / 1000)}     ใบ 
    แบงค์    500     ${Math.trunc(result1 / 500)}    ใบ
    แบงค์    100     ${Math.trunc(result2 / 100)}    ใบ 
    แบงค์    50      ${Math.trunc(result3 / 50)}     ใบ
    แบงค์    20      ${Math.trunc(result4 / 20)}     ใบ 
    เหรียญ   10      ${Math.trunc(result5 / 10)}     เหรียญ
    เหรียญ   5       ${Math.trunc(result6 / 5)}      เหรียญ 
    เหรียญ   2       ${Math.trunc(result7 / 2)}      เหรียญ
    เหรียญ   1       ${Math.trunc(result8 / 1)}      เหรียญ`)
}

console.log(toChange(1631))