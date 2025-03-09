// funtion Ep.5
// คือ การทำงานหนึ่งๆ จะไม่ทำงานหากเราไม่เรียกใช้ (call function)
//------------------------------
// 2. arrow function การประกาศฟังก์ชันโดยใช้ => (fat arrow)
var aa = () => {
    console.log('Hello World')
}

let bb = (data) => {
    console.log("Hi", data)
}

let bb1 = data => console.log("Hi", data)

const cc = () => {
    console.log("Hey")
}
const cc1 = () => console.log("Hey")

let dd = cc

const ee = (n1, n2) => {
    return n1 + n2
}
const ee1 = (n1, n2) => n1 + n2

console.log(ee(100, 10))

aa()
bb("Hello World")
cc()
dd()
bb1("Hello World")
cc1()
ee1()