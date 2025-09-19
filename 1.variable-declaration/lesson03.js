// 1. Enhanced Object Property là gì?
// Trong ES6, khi khai báo object, bạn có thể viết ngắn gọn hơn nhờ một số cú pháp mới, 
// gọi là Enhanced Object Property (tạm dịch: “Thuộc tính đối tượng nâng cao”).
// CÓ 3 ĐIỂM CHÍNH : 
// Shorthand Property Names – Viết tắt tên thuộc tính nếu trùng với tên biến.
// Shorthand Method Names – Khai báo method ngắn gọn, không cần function.
// Computed Property Names – Tạo key động bằng biểu thức.


// 2. Shorthand Property Names -----------------------------------------
// VERSION CŨ 
// let name = "Huy";
// let age = 21;

// let person = {
//     name: name,
//     age: age
// };

// ES 6 
let name = "Huy";
let age = 21;

let person = { name, age };
console.log(person); // { name: "Huy", age: 21 }
//Chỉ cần tên biến trùng với key thì viết 1 lần là đủ.
// ---------------------------------------------------------------------

// 3. Shorthand Method Names ------------------------------------------

// Trước ES6:

// let person = {
//   sayHello: function () {
//     console.log("Hello!");
//   }
// };
// person.sayHello(); // Hello!

// ES 6
// let person = {
//     sayHello() {
//         console.log("Hello!");
//     }
// };
// person.sayHello(); // Hello!
// 👉 Không cần viết function.


// ===================================================================


// 4. Computed Property Names ---------------------------------------
// Cho phép dùng biểu thức hoặc biến làm key cho object.
// let prop = "age";
// let person = {
//     name: "Huy",
//     [prop]: 21   // key được lấy từ biến prop
// };
// console.log(person); // { name: "Huy", age: 21 }

let i = 1;
let obj = {
    ["level" + i]: "Beginner"
};
console.log(obj); // { level1: "Beginner" }

//====================================================================