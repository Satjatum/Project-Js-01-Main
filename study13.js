// funtion Ep.2
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
//3. no parameter, has return
function myfunctC() {
    console.log("Hello")
    return "Hi"
}

//4. have parameter, has return
function myfunctD(d1, d2) {
    return d1 + d2
}

let xx = myfunctC()
console.log(`${xx}`)

console.log("*******************************")

//เวลาเรียกใช้ควรเอาค่าที่ return ไปใช้งาน
console.log(myfunctD(20, 20))