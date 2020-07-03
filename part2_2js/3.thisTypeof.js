function thaiTypeOf(variable) {
    let result = ""
    switch (typeof (variable)) {
        case "string":
            result = "ข้อความ";
            break;
        case "number":
            result = "ตัวเลข";
            break;
        case "object":
            result = "ออปเจ็คต์";
            break;
        case "boolean":
            result = "บูลลีน";
            break;
        case "undefined":
            result = "อันดีฟายน์";
            break;
        default:
            result = "เกิดข้อผิดพลาด";
    }
    return result
}

console.log(thaiTypeOf(23))