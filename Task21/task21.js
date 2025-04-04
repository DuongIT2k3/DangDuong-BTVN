//Bai1: cleanFalsyValues
function cleanFalsyValues(arr){
    const arr2 = arr.filter(Boolean);
    console.log(arr2);
}

cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]);

//Bai2: filterEvenNumbers
function filterEvenNumbers(arr){
    const arr2 = arr.filter(num => num % 2 ===0);
    console.log(arr2);
}

filterEvenNumbers([1,2,3,4,5,6]);

//Bai3: filterLongStrings
function filterLongStrings(arr){
    const arr2 = arr.filter(str => str.length > 5);
    console.log(arr2);
}

filterLongStrings(["hello", "world", "javascript", "nodejs"]);

//Bai4: findMinMaxAverage
function isPrime(n){
    if(n < 2) return false;
    for(let i =2; i<= Math.sqrt(n);i++) if (n % i ===0) return false;
    return true;
}
function findMinMaxAverage(arr){
    if(arr.length === 0) return null;

    let max = arr[0]; maxIndex = 0;
    let min = arr[0]; minIndex = 0;
    let primeSum = 0;
    let primeCount = 0;

    for (let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(num > max){
            max = num;
            maxIndex = i;
        }
        if(num < min){
            min = num;
            minIndex = i;
        }
        if(isPrime(num)){
            primeSum += num;
            primeCount++;
        }
    }
    let primeAverage = primeCount > 0 ? +(primeSum / primeCount).toFixed(2) : null;
    
    return {
        max: max,
        min: min,
        maxIndex: maxIndex,
        minIndex: minIndex,
        primeAverage: primeAverage
    }
}
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(findMinMaxAverage([5, 5, 2, 2, 1]));

//Bai5: insertNumber
function insertNumber(arr,num){
    let cleanArr = arr.filter(item => typeof item === 'number' && !isNaN(item));

    cleanArr.sort((a,b) => a - b);

    if(typeof num !== 'number' || isNaN(num)){
        console.log(cleanArr);
        return cleanArr;
    }
    let inserted = false;
    for(let i =0; i< cleanArr.length;i++){
        if(num<= cleanArr[i]){
            cleanArr.splice(i,0,num);
            inserted = true;
            break;
        }
    }
    if(!inserted) cleanArr.push(num);
    console.log(cleanArr);
    return cleanArr;
}
insertNumber([1, 3, 5, 7, 9], 6);
insertNumber([3, "hello", 1, NaN, 4, null], 2);
insertNumber([], 5);
insertNumber([-1, 10, -5, "abc"], -3);