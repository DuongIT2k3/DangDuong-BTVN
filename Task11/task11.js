function isTriangle(a,b,c){
    return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a
}
let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));
console.log(isTriangle(a,b,c));
