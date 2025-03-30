let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));
function findMaxNumber(a,b,c){
   if(isNaN(a) || isNaN(b) || isNaN(c)){
        document.getElementById("output").innerText = "Vui lòng nhập 3 số";
        return;
   }
   let max = a;
   if(b>max) max = b;
   if(c > max) max =c;
   document.getElementById("output").innerText = `Số lớn nhất là: ${max}`;
}


findMaxNumber(a,b,c);