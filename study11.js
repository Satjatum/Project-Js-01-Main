// control statement (loop/iteration/repetition) Ep.3
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// forEach ใช้กับ arry
let aa = [10, 20, 30, 40, 50]
aa.forEach(item => {
    console.log(item * 10)
});
console.log("*******************************")

let bb = ['สมชาย', 'สมหญิง', 'สมหมาย']
bb.forEach(item => {
    console.log(`สวัสดี ${item}`)
})
console.log("*******************************")


// for..in ใช้กับ Object หรือ arry ไม่แนะนำ
let cc = {
    fullname: 'สมชาย',
    age: 20,
    score: [10, 20, 30],
    address: {
        no: 10 / 20,
        street: 'เพชรเกษม',
        provice: 'กทม'
    }
}
console.log(cc.fullname)
console.log(cc.age)
console.log(cc.score[1])
console.log(cc.address.street)
console.log("*******************************")

for (keyname in cc) {
    console.log(keyname)
    console.log(cc[keyname])
}
// for..of ใช้กับ arry
let dd = ['สมชาย', 'สมหญิง', 'สมหมาย']
console.log(dd[0])
console.log(dd[1])
console.log(dd[2])
console.log("*******************************")
for (item of dd) {
    console.log(`สวัสดี ${item}`)
}
console.log("*******************************")
