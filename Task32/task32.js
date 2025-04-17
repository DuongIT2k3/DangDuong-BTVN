function filterByKeyword(arrayString, keyWord) {
  return arrayString.filter((item) =>
    item.toLowerCase().includes(keyWord.toLowerCase())
  );
}

const arrayString = ["JavaScript", "java", "Python", "Ruby"];
let keyWord = "ja";

console.log(filterByKeyword(arrayString, keyWord));
