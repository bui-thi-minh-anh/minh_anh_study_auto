// *** Bt khai báo biến và in ra ***
// const name = 'Minh Anh';
// let age = '26';
// let job = 'tester';
// console.log("Tôi tên là", name, age , "tuổi", "và tôi làm nghề", job);

// *** Bt cộng 2 số***
// const a = 8;
// const b = 10;
// console.log(a+b);

// ** in 2 số ngẫu nhiên trong khoảng và in ra tổng - ở bài này mình học được là hàm viết hoa viết thương phải theo đúng quy tắc **
// let a = Math.floor(Math.random() * 1000) + 1;
// let b = Math.floor(Math.random() * 1000) + 1;
// console.log("số a là:", a);
// console.log("số b là:", b);
// console.log("tong 2 so là:", a+b);

// ** Tạo 5 biến với kiểu dữ liệu sau: string, number, boolean, undefined, null**
// let name = "Minh Anh";    // string 
// let age = 26;            // number
// let degree = true;      // boolean
// let Marital_status;     //undefined
// let Jerk = null;
// console.log(
//   name + '\n'+
//   age + '\n'+ 
//   degree
// );

// ** Tạo một object tên user gồm name, age, isStudent
// Tạo một array tên skills gồm 3 kỹ năng **
//  let user = {
//     name : 'Minh Anh',
//     age : '26',
//     isStudent : false
//  };

//  let skills = ['FE testing', 'api testing', 'sql query'];

//  console.log("Thông tin new member:", typeof user);
//  console.log("Thông tin skills: ", typeof skills);

//  console.log("skill có phải kiểu array không:", Array.isArray(skills));

// BT3: So sánh kiểu và giá trị
// let a = 100;    // number
// let b = "100";  // string
// let c = true;   //boolean

// console.log("Thông tin biến a:", typeof a);
// console.log("Thông tin biến b:", typeof b);
// console.log("Thông tin biến c:", typeof c);

// console.log("a == b", a == b);     // so sánh sự khác nhau giữa == và ===
// console.log("a === b", a === b);   // == là so sánh giá trị còn === là so sánh cả giá trị và kiểu.

// ** Cho biến total = 0, dùng += để cộng thêm lần lượt các số: 5, 10, 20 **
// let total = 0;
// let array_number = [5, 10, 20];

// for(let num of array_number) {
//     total += num;
// }

// console.log("tổng là: ", total);

// ** Cho biến hp = 100
// Mỗi lần bị tấn công trừ đi 15 máu
// Sau 3 lần bị tấn công, in ra máu còn lại **
// let hp = 100;
// for (let i = 0; i < 3; i++) {
//     hp -= 15;
// }
// console.log("số máu còn lại sau chiến đấu với 3 bài cơ bản dễ nhất của js là:", hp);

// ** Cho biến score = 2.
// Mỗi cấp độ, điểm được nhân đôi.
// Sau 3 cấp độ, in ra điểm cuối cùng. **
// let score = 2;
// for (let i = 0; i < 3; i++){
//     score *= 2;
// }

// console.log("điểm sau 3 vòng là:", score);

// let x = 17;
// console.log ("chia lây phan nguyen", Math.floor(x /= 2)); // đoạn nay dùng hàm Math.floor vì hàm này làm tròn xuống

// ** Hãy tính tổng các số lẻ trong mảng. **
//  let numbers = [2, 5, 7, 8, 9, 14, 16];
//  let tong = 0;
//  for (let num of numbers){
//     if (num % 2 === 1){
//     tong += num
//     };
//  }
//   console.log("Tong so le trong mang:", tong);

// ** Tính tổng các số chia hết cho 3 **
// let nums = [9, 10, 12, 14, 15, 18];
// let tong = 0;
// for (let nu of nums){
//     if(nu % 3 === 0){
//         tong += nu;
//     }
// }
// console.log("tong cac so chia het cho 3", tong);

// ** tính tổng cách số chẵn và các số lẻ trong mảng **
// let nums = [1, 2, 3, 4, 5, 6];
// let tongchan = 0;
// let tongle = 0;
// for(let nu of nums){
//     if(nu % 2 === 0){
//         tongchan += nu;
//     }
//     else {
//         tongle += nu;
//     }
// }

// console.log("Tong cac so chan:", tongchan);
// console.log("Tong cac so le", tongle);

// ** đếm số lượng các số chia hết cho 3 trong mảng và tính hiệu số đầu trong mảng trừ cho các số còn lại trong mảng.
// let nums = [2, 5, 8, 11, 13, 16, 21, 24];
// let a = 0;
// let hieu = nums[0];
// for (let nu of nums){
//     if(nu % 3 === 0){
//         a += 1;
//     }
// }
// for (let i = 1; i < nums.length; i++){
//     hieu -= nums[i];
// }
// console.log("So cac so chia het cho 3: ", a);
// console.log("Hiệu số đầu tiên trong mảng trừ cho các số còn lại trong mảng:", hieu);

//** Hãy viết chương trình để:

// Tính tổng các số lẻ

// Tính tích các số chẵn

// Đếm bao nhiêu số chia hết cho 5

// Tính hiệu: số đầu tiên - tất cả các số còn lại

// In ra 2 mảng mới:

// Một mảng chứa số chẵn

// Một mảng chứa số lẻ **

let arr= [3, 6, 9, 12, 15, 17, 20, 25];
let tong_so_le = 0;
let tich_so_chan = 1;
let so_chia_het_5 = 0;
let hieu_mang = arr[0];

let mang_chan = [];
let mang_le = [];

for (let num of arr){
    if (num % 2 === 1){
        tong_so_le += num;
        mang_le.push(num);
    }
}
console.log("mang so le:", mang_le);
for (let num1 of arr){
    if (num1 % 2 === 0){
        tich_so_chan *= num1;
        mang_chan.push(num1);
    }
}
console.log("mang so chan:", mang_chan);

for (let num2 of arr){
    if (num2 % 5 === 0){
        so_chia_het_5 += 1;
    }
}

for (let i = 1; i < arr.length; i++){
    hieu_mang -= arr[i];
}

console.log("tong cac so le trong mang:", tong_so_le);
console.log("tich cac so chan trong mang:", tich_so_chan);
console.log("so cac so chia het cho 5:", so_chia_het_5);
console.log("hieu so thu nhat trong mang tru cac so con lai:", hieu_mang);
