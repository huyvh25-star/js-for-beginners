
// KHÁI NIỆM CƠ BẢN : BIẾN LÀ GÌ ? 
//1. biến là gì : Biến trong JavaScript là một định danh (identifier) trỏ đến một vùng nhớ trong RAM để lưu dữ liệu.
//2. Với kiểu dữ liệu nguyên thủy (primitive), biến lưu trực tiếp giá trị (ví dụ: number, string)
//3. Với kiểu tham chiếu (reference) như object, array, function… 
//   thì biến lưu một địa chỉ tham chiếu trỏ đến vùng nhớ chứa dữ liệu đó trong heap.

// KHAI BÁO BIẾN TRONG JAVASCRIPT
// trong js có 3 cách khai báo trính


// 1. Var 
// Cách khai báo biến cũ, từ phiên bản JavaScript đầu tiên.
// Phạm vi (scope) là function hoặc toàn cục (global).
// Có thể khai báo lại biến mà không báo lỗi.
// Không nên dùng trong code hiện đại vì dễ gây lỗi khó đoán.
var name = "Huy";
var age = 20;
console.log(name, age);

// 2.let 
/*
    Xuất hiện từ ES6 (2015).
    Phạm vi block ({}), an toàn hơn var.
    Không thể khai báo lại trong cùng 1 phạm vi, nhưng có thể gán lại giá trị.
    Được dùng phổ biến nhất hiện nay.
*/

let city = "Hà Nội";
city = "Đà Nẵng"; // ✅ có thể gán lại
console.log(city);

// 3.const 

/*
    Cũng xuất hiện từ ES6.
    Dùng cho hằng số (constant) hoặc biến không đổi tham chiếu.
    Bắt buộc phải gán giá trị ngay khi khai báo.
    Không thể gán lại.
*/
const PI = 3.14;
console.log(PI);

// PI = 3.1415 ❌ Lỗi: không thể gán lại
