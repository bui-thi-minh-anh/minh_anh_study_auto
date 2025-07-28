// ** Hàm nhập vào 1 số check xem số đó có nguyên tố không và in tất cả các số nguyên tố trong khoảng từ 1 - số đó
function bang_so_nguyen_to(n){
    let dem_so = 0;
    // let dem_so_nho = 0;
    let mang_nguyen_to = [];
    let num_arr;
    for (let i = 2; i < n; i++){
            let dem_so_nho = 0;
            if(n % i === 0){
                dem_so += 1;
            }
            else {
                dem_so += 0;
            }
            for (let y = 2; y <= Math.sqrt(i); y ++){
                if (i % y === 0){
                    dem_so_nho += 1;
                    // mang_nguyen_to.push(i);
                }
                else {
                    dem_so_nho += 0;
                }
            }
            if (dem_so_nho === 0){
                mang_nguyen_to.push(i);
            }
    }
    if (dem_so !== 0){
        return "Đây không phải là số nguyên tố"
    }
    else {
        return "Đây là số nguyên tố " + n + "\n" + "List số nguyên tố là: " + mang_nguyen_to.join(", ");
    }
}
console.log(bang_so_nguyen_to(17));