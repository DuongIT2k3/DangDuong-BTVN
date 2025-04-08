function removeDuplicate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (typeof current === "number" && isNaN(current)) {
      if (!result.some((item) => typeof item === "number" && isNaN(item))) {
        result.push(current);
      }
    } else if (!result.includes(current)) {
      result.push(current);
    }
  }
  return result;
}

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
const result = removeDuplicate(fruits);

console.log(result);
