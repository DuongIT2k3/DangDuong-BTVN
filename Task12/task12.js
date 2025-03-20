function printSquareNumber(n){
    for(let i = 2; i <= n; i++){
        const sqrt = Math.sqrt(i);
        if(Math.floor(sqrt) === sqrt){
            console.log(i);
        }
    }
}
printSquareNumber(10);
printSquareNumber(20);
printSquareNumber(30);