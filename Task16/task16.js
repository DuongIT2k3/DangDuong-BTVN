function taxiBill(km){
    if(isNaN(km) || km <=0){
        document.getElementById("result").innerHTML = "Số km không hợp lệ";
        return
    }
    let cost = 0;
    if(km <= 1){
        cost = 10000;
    } else if (km > 1 && km <=30){
        cost = 10000 + (km-1) * 8000;
    } else{
        cost = 10000 + 29 * 8000 + (km - 30) * 7000;
    }
    document.getElementById("result").innerHTML = `Số tiền phải trả là: ${cost}VNĐ`;
}

let km = parseInt(prompt("Nhập số km: "));
taxiBill(km);