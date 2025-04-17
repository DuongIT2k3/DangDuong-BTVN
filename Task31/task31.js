const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"];
function countTotalWords(arr){
    let total = 0;
    arr.forEach(sentence => {
        const words = sentence.trim().split(/\s+/);
        if(sentence.trim() !== " "){
            total += words.length
        }
    })
    return total;
}

console.log(countTotalWords(arrayWords));