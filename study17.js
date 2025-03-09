// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// callback function เป็น function ที่ทำงานที่หลัง หลังจากการเรียกใช้ฟังก์ชันหนึ่งไปก่อนหน้า

function funcA(xx, yy, zz) {
    console.log(xx)
    let aa = yy * 10

    zz(aa) //callback function
}

function funcB(nn) {
    console.log(nn * 200)
}
funcA(11, 22, funcB)
funcA(10, 20, (data) => {
    console.log(data)
})
