// ** Bài tập nhập vào lương gross trả ra lương net( có trừ BHXH (8%), BHYT(1.5%), BHTN(1%) và Thuế TNCN)

// function getSalaryNet(salaryGross,socialInsurance = 8, healthInsurance = 1.5, unemploymentInsurance = 1 ){
//     let salaryNet = 0;
//     let tax = 0;
//     // const socialInsurance = null;
//     // const healthInsurance = null;
//     // const unemploymentInsurance = null;
//     salaryGross < 7000000 ? tax = 0 : (7000000 <=salaryGross && salaryGross < 15000000 ? tax = salaryGross * 5 / 100 : tax = salaryGross * 10 / 100);
//     salaryNet = salaryGross - salaryGross * (socialInsurance + healthInsurance + unemploymentInsurance) / 100 - tax;

//     return "Luong net cua ban la: " + salaryNet;
// }
// console.log(getSalaryNet(20000000, 8, 1.5, 1));
// console.log(getSalaryNet(20000000));

// ** Công ty muốn tính thưởng Tết cho nhân viên theo hiệu suất làm việc

// function getTetBonus (grossSalary, nameEmployee, performanceRank , tetBonus = 0){
//     performanceRank < 70 ? tetBonus = 0 : ( 70 <= performanceRank && performanceRank <= 79 ? tetBonus = 70 : (80 <= performanceRank && performanceRank <= 89 ? tetBonus = 100 : tetBonus = 150));
//     let tetBonusGross = Math.round(grossSalary * tetBonus / 100 / 1000) * 1000;

//     return {
//         name_Employee: nameEmployee,
//         gross_Salary: grossSalary.toLocaleString(),
//         performanceRank: tetBonus,
//         tet_bonus: tetBonusGross.toLocaleString()
//     };
// }
// console.log (getTetBonus (10078000, "Minh Anh", 90));

// *** Bai 4: Object ***

// ** Tính tổng lương nhân viên viên **

// function totalSalaryEmployee(employeeList){
//     let employeeInfor = "";
//     let totalSalaryD2 = employeeList.reduce((sum , employee) => sum + employee.salary , 0);
//     for (let infor of employeeList){
//         employeeInfor += `- ${infor.name}: ${infor.salary} \n`;
//     }
//     return {
//         employee_information: employeeInfor,
//         total_Salary: totalSalaryD2.toLocaleString()
//     }
// }
//     let employeeListD2 = [
//         { name: "Minh Anh", salary: 1000000},
//         { name: "Hoang" , salary: 2000000 },
//         { name: "Van", salary: 3000000},
//         {name: "a Phuong", salary: 4000000}
//     ];

// console.log(totalSalaryEmployee(employeeListD2));

// ** Tính tổng trang sách **

// function totalPages(listNewBook){
//     let totalPageOfNewBook = listNewBook.reduce ((sum , sumPages) => sum + sumPages.pages , 0);
//     let bookInfor = "";
//     for (let infor of listNewBook){
//         bookInfor += `- Title book: ${infor.title} | author: ${infor.author}  | pages: ${infor.pages} \n `
//     }
//     return {
//         total_page_of_new_book: totalPageOfNewBook.toLocaleString() ,
//         book_information: bookInfor
//     }
// }

// let inforBooks = [
//     {title: "Phia sau nghi can X", author: "Higashino keigo", pages: 450},
//     {title: "Ngày xưa có một chuyện tình", author: "Nguyễn Nhật Ánh", pages: 520},
//     {title: "Còn buon khong ban hien", author: "Minh Anh", pages: 2025}
// ];

// console.log(totalPages(inforBooks));

// function productFilter(productList){
//     let productUpperCase = productList.map(product => product.name.toUpperCase());
//     let highProduct = productList.filter (product => product.price > 1000000);
//     let totalPrice = 0;
//     for (let total of highProduct){
//         totalPrice += total.price;
//     }

//     return{
//         product_names_uppercase: productUpperCase,
//         expensive_products: highProduct,
//         total_expensive_price: totalPrice
//     }
// }

// let products = [
//     { name: "iPhone 12", price: 18000000 },
//     { name: "Samsung A52", price: 72000 },
//     { name: "Xiaomi Redmi 10", price: 3900000 },
//     { name: "iPhone 13 Pro", price: 27000000 },
// ];

// console.log(productFilter(products));

function productCategory (productList){
    let productNameUpper = productList.map( item => item.product.toUpperCase());
    let highBill = productList.filter(item => item.quantity * item.price > 2000000);
    let totalBill = productList.reduce((sum,item)=> sum += (item.quantity * item.price), 0)

    return {
        list_product_uppercase: productNameUpper,
        bill_high: highBill,
        sum_bill: totalBill.toLocaleString() + ` VND`
    }
}

function printBill(printEachBill){
    let billDetail = "";
    for(let eachBill of printEachBill){
        let priceBill = 0;
            priceBill = eachBill.quantity * eachBill.price;
        billDetail += `
        Product name = ${eachBill.product} \n
        Quantity = ${eachBill.quantity} \n
        Price = ${eachBill.price} \n
        Total value of bill = ${priceBill} \n
        ----------------------------------- `
    }

    return billDetail;
}

function printOneBill(printSelectedBill, index){
    if (index >= 0 && index <= printSelectedBill.length){
        let items = printSelectedBill[index]
        let priceOfBill = items.quantity * items.price;

        return `
        Product name = ${items.product} \n
        Quantity = ${items.quantity} \n
        Price = ${items.price} \n
        Total value of bill = ${priceOfBill} \n
        -----------------------------------          
        `
    }
    else {
        return "Don't have this bill"
    }
}

let orders = [
    { product: "Chuột Logitech", quantity: 2, price: 450000 },
    { product: "Bàn phím cơ Akko", quantity: 1, price: 1200000 },
    { product: "Tai nghe Sony", quantity: 3, price: 850000 },
    { product: "Màn hình LG", quantity: 1, price: 3200000 },
];

// console.log(productCategory(orders));

// console.log(printBill(orders));

console.log(printOneBill(orders, 0));