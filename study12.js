// funtion Ep.1
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// function มี 4 ประเภทใหญ่
// 1. no parameter, no return
function myfunctA() {
    console.log("A")
}


// 2. have parameter, no return
function myfunctB(data1, data2, data3) {
    console.log(data1)
    console.log(data2 + data3)

}

myfunctA()
myfunctA()
console.log("*******************************")
myfunctB('Hello', 10, 20)
myfunctB('Hi', 100, 200)