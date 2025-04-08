function checkSymmetricalArr(arr){
    if(!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }
    const isValid = arr.every(item => typeof item ==="number" && !isNaN(item));
    if(!isValid){
        return "Dữ liệu không hợp lệ";
    }
    if(arr.length === 1){
        return "Mảng có 1 phần tử, không thể kiểm tra";
    }
    for(let i = 0; i < Math.floor(arr.length /2); i++){
        if(arr[i] !== arr[arr.length - 1 - i ]){
            return false;
        }
    }
    return true;
    
}
let input = prompt("nhập mảng số nguyên (ngăn cách bởi dấu phẩy):");
if(input){
    let arr = input.split(",").map(item => Number(item.trim()));

    let result = checkSymmetricalArr(arr);
    document.write(`Kết quả: ${result}`);
}else{
    document.write("Bạn chưa nhập dữ liệu");
}