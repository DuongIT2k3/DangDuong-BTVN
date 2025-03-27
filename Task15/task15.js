function isSameSign(a,b){
    return (a >= 0 && b >= 0) || (a < 0 && b < 0);

}

let a = parseInt(prompt("Nhập số a: "));
let b = parseInt(prompt("Nhập số b: "));

console.log(isSameSign(a,b));