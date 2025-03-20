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

sort(5,4,3);