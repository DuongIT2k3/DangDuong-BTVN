let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));
function sort(a,b,c){
    if(a > b){
        a = a * b;
        b = a / b;
        a = a / b;
    }
    if( a > c){
        a = a * c;
        c = a / c;
        a = a / c;
    }
    if( b > c){
        b = b * c;
        c = b / c;
        b = b / c;
    }
    console.log(a,b,c);
}

sort(a,b,c);