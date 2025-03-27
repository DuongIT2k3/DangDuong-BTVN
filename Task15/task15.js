function isSameSign(a,b){
    if((a >= 0 && b >= 0) || (a < 0 && b < 0)){
        document.getElementById("result").innerHTML = "true";
    }else{
        document.getElementById("result").innerHTML = "false";
    }
}

let a = parseInt(prompt("Nhập số a: "));
let b = parseInt(prompt("Nhập số b: "));

isSameSign(a,b);