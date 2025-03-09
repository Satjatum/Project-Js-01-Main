// control statement (loop/iteration/repetition) Ep.2
// คำสั่งควบคุมในกลุ่มต้องมีการพิสูจน์ตรวจสอบก่อนทำงานใดๆ
//------------------------------
// 1. break in loop
let aa = 1
while (aa <= 5) {
    aa++
    if (aa == 3) {
        break
    }
    console.log(aa - 1)

}

// 2. continue in loop
let bb = 1
while (bb <= 5) {
    bb++
    if (bb == 3) {
        continue
    }
    console.log(bb - 1)
}

