// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa = '100'
console.log(aa / 5)
console.log(aa * 5)
console.log(aa - 5)
console.log(Number(aa) + 5)

// number conversion
let bb = 100
let cc = 200.54888
console.log(bb, cc)
console.log(bb.toString() + cc.toString())
console.log(cc.toFixed(4))
console.log(cc.toFixed(2))

// boolean conversion
let dd = true
let ee = false
console.log(Number(dd), Number(ee))
console.log(dd.toString(), ee.toString())
