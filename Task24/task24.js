function sortArrNumber(arr){
    const newArr = [...arr];
    const length = newArr.length;

    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - 1 - i; j++){
            if(newArr[j] > newArr[j + 1]){
                let temp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = temp;
            }
        }
    }
    return newArr;
}
const number = [4,3,7,6,5,8,2,1,9];
const result = sortArrNumber(number);
console.log(result); 