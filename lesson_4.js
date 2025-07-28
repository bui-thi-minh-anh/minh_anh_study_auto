//** Viết một hàm nhận vào 1 mảng các số nguyên. Hàm sẽ lọc ra các số vừa là số chẵn vừa chia hết cho 3, và trả về dưới dạng mảng.**

// function loc_so_chan_chia_het_3(arr) {
//     let result = [];
//     for (let num of arr){
//         if(num % 2 === 0 && num % 3 === 0){
//             result.push(num);
//         }
//     }
//     return result;
// }
// console.log(loc_so_chan_chia_het_3([2,6,5,8,10,15,19,21,30]));

// ** Viết một hàm nhận vào một mảng số nguyên. Hàm sẽ:
// Lọc ra các số chia hết cho 5 nhưng không chia hết cho 2, tính tổng và trả về dạng object **

// function loc_so(arr){
//     let result_arr = [];
//     let sum_arr = 0;
//     for(let num of arr){
//         if(num % 5 === 0 && num % 2 !== 0){
//             result_arr.push(num);
//         }
//     }
//     for(let num2 = 0; num2 < result_arr.length; num2++){
//         sum_arr += result_arr[num2];
//     }
//     return {
//         mang_loc_duoc: result_arr,
//         tong_la: sum_arr
//     };
// }
// console.log(loc_so([2,4,7,8,19,25,35,37,46,23]));

// function loc_so(arr){
//     let loc_arr = arr.filter(num => num % 5 === 0 && num % 2 !== 0);
//     let tong_loc = loc_arr.reduce ((sum,num) => sum + num, 0);

//     return {
//         mang_da_loc: loc_arr,
//         tong_mang_loc: tong_loc
//     };
// }
// console.log(loc_so([2,4,7,8,19,25,35,37,46,23]));

// function duong_le_chia_het_3(arr){
//     let duong_le_arr = arr.filter (num => num > 0 && num % 2 === 1 && num % 3 === 0);
//     let tong_mang = duong_le_arr.reduce ((sum,num) => sum + num , 0);

//     return{
//         ham_moi: duong_le_arr,
//         tong_la: tong_mang
//     };
// }
// console.log(duong_le_chia_het_3([-2,-5,0,1,4,6,9,15]));

// function trung_binh_cong_mang(arr){
//     let mang_chan = arr.filter(num => num % 2 === 0 && num > 0);
//     let tong_mang_chan = mang_chan.reduce((sum,num) => sum + num , 0);
//     let trung_binh_cong = mang_chan.length > 0 ? Math.round(tong_mang_chan / mang_chan.length) : 0;

//     return {
//         mang_chan_la: mang_chan,
//         tong_mang_chan_la: tong_mang_chan,
//         trung_binh: trung_binh_cong
//     };
// }
// console.log(trung_binh_cong_mang([-2,-5,0,1]));

// ** Bài tập phân biệt .map, .filter và .forEach

// function phan_loai_so(arr){
//     let phan_loai = arr.map(num => num < 0 ? "âm" : (num === 0 ? "so 0" : "so duong"));

//     return phan_loai;
// }
// console.log(phan_loai_so([-2,-5,-7,0,9,7,0,-4]));

// function phan_loai_so_am(arr){
//     let mang_am = [];
//     arr.forEach(
//         num => {if (num < 0) mang_am.push(num)}
//     );
//     return mang_am;
// }
// console.log(phan_loai_so_am([-2,-5,-7,0,9,7,0,-4]));