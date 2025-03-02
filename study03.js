// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "aaa"
let bb = "bbb"
let cc = "ccc"
console.log(aa, bb, cc)

// number
let dd = 111
let ee = 23.23
console.log(dd, ee)

// boolean
let ff = true
let gg = false
console.log(ff, gg)

// object
let hh = {
    name: 'John',
    age: 10,
    major: 'DTI01',
    uni: `SAU ${10 + 20}`
}
console.log(hh)

// array
let ii = [10, 20, 30, 40]
console.log(ii[1])
// undefined
let jj = undefined
console.log(jj)


// null
let ll = null
console.log(ll)


// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof (ll))