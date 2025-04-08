const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
];

function countElement(arr){
    const result = {};
    arr.forEach(item =>{
        result[item] = (result[item] || 0) +1;
    })
    return result;
}

const result = countElement(fruits);

console.log(result); 