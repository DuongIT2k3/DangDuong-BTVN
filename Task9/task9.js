function swapNumber(a, b){
    a = a * b;  // a = 2*3 = 6
    b = a / b;  // b
    a = a / b;
    console.log(a, b);
    return {a , b};
}

swapNumber(2,3);