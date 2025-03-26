function printIsoscelesTriangle(n, character){
    for(let i = 1;i < n; i++){
        let line = "";
        for(let j = 1; j <= n - i; j++){
            line += " ";
        }
        for(let k = 1; k <= 2 * i - 1; k++){
            line += character;
        }
        console.log(line);
    }
}

printIsoscelesTriangle(6,"*");