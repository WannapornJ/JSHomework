function changeStringToThaiDate(date) {
    let months = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม",
        "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
        monthFormat = Number(String(date).split("-").slice(1, 2)),
        year = Number(String(date).split("-").slice(2)),
        day = Number(String(date).split('-').slice(0, 1));
    
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

console.log(changeStringToThaiDate("29-4-2020"))