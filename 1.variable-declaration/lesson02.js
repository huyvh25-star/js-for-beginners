// 1. Template Literals là gì?
/*
    Trong JavaScript, Template Literals (hay còn gọi là Template Strings) 
    là một cách viết chuỗi nâng cao, được giới thiệu từ ES6 (ECMAScript 2015).
    Thay vì dùng dấu nháy đơn '...' hoặc nháy kép "...", ta dùng backtick `...`.

    👉 Ưu điểm:
    Cho phép viết chuỗi nhiều dòng.
    Hỗ trợ interpolation (nhúng biến hoặc biểu thức trực tiếp vào chuỗi).
    Hỗ trợ tagged templates (nâng cao hơn, dùng với hàm).

*/
// cú pháp cơ bản 
const name = "dev";
const age = 22;

const message = `Xin chào, mình là ${name}, năm nay ${age} tuổi.`;

console.log(message);
