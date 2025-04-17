const users = [
  { fullname: "Hoang Thi K", age: 20, address: "LangSon" },
  { fullname: "Le Thi X", age: 22, address: "BacGiang" },
  { fullname: "Le Van Y", age: 21, address: "HaNoi" },
  { fullname: "Hoang Duc F", age: 22, address: "HaNoi" },
  { fullname: "Tran Duc B", age: 32, address: "LangSon" },
  { fullname: "Tran Duc B", age: 32, address: "LangSon" },
  { fullname: "Tran Thi E", age: 32, address: "LangSon" },
  { fullname: "Nguyen Ngoc V", age: 32, address: "LangSon" },
  { fullname: "Nguyen Minh E", age: 32, address: "LangSon" },
  { fullname: "Nguyen Duc H", age: 32, address: "LangSon" },
];

function sortedUsers(arrayUser) {
  return arrayUser.slice().sort((a, b) => {
    const nameA = a.fullname.trim().split(" ").slice(-1)[0];
    const nameB = b.fullname.trim().split(" ").slice(-1)[0];
    return nameA.localeCompare(nameB);
  });
}
console.log(sortedUsers(users));