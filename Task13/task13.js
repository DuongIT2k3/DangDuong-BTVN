let n = parseInt(prompt("Nhập số n: "));
function printPrimeNumber(n) {
    let result = "Các số nguyên tố từ 2 đến " + n + "là: ";
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for(let j = 2; j * j <= i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result += i + " ";
        }
    }
    document.getElementById("result").innerText = result;
}

printPrimeNumber(n);
