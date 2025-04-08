function reverseArr(arr){
    let reversed = [];
    arr.forEach(item => {
        if(item !== null && item !== undefined && !reversed.includes(item)){
            reversed.unshift(item);
        }
    });
    return reversed;
}
const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];
const result = reverseArr(arrNumber);
console.log(result);

