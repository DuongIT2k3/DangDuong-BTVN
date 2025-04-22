const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

const table = document.getElementById("dataTable");

students.forEach((item) =>{
    const data = document.createElement("tbody");
    data.innerHTML = `
        <tbody>
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.city}</td>
            </tr>
        </tbody>
    `
    table.appendChild(data);
    table.style.cssText = `
        border: 3px solid blue;
        background-color: #f0f0f0;
    `
})