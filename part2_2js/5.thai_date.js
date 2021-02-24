function changeStringToThaiDate(date) {
    let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม",
        "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthFormat = Number(String(date).split("-").slice(1, 2)),
        year = Number(String(date).split("-").slice(2)),
        day = Number(String(date).split('-').slice(0, 1));


    console.log(date.split("-"))

    year = year + 543

    if (Number(monthFormat) > months.length) {
        return "error"
    }

    for (let i = 0; i < months.length; i++) {
        if (/คม$/.test(months[i])) {
            if (day > 31) {
                return "error"
            }
        } else if (/ยน$/.test(months[i])) {
            if (day > 30) {
                return "error"
            }
        } else {
            if (day > 28) {
                return "error"
            }
        }
    }

    let month = months[monthFormat - 1]
    return `วันที่ ${day} เดือน ${month} พ.ศ.${year}`
}
let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

function changeStringToThaiDate(date) {
    let dateArr = date.split("-"),
        [d, m, y] = dateArr;

    let maxDate = checkMax(m)
    return (Number(d) > maxDate || months[m - 1] === undefined) ? "error" : `${d} ${months[m - 1]} ${Number(y) + 543}`
}

function checkMax(month) {
    let maxDay = (/คม$/.test(months[month - 1])) ? 31 : (/ยน$/.test(months[month - 1])) ? 30 : 28
    return maxDay
}

console.log(changeStringToThaiDate("29-4-2020"))
console.log(changeStringToThaiDate("31-11-2000"))
console.log(changeStringToThaiDate("12-13-1996"))