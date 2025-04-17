function convertArrayToObject(array) {
  return array.reduce((obj, item) => {
    const [key, value] = item.split(":");
    obj[key] = value;
    return obj;
  }, {});
}
const arrayString = ["name:John", "age:30", "city:NY"];
console.log(convertArrayToObject(arrayString));