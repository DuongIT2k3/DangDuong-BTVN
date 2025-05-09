const name = document.getElementById("name");
const math = document.getElementById("math");
const english = document.getElementById("english");
const science = document.getElementById("science");
const search = document.getElementById("searchInput");
const table = document.getElementById("studentTable");
const filter = document.getElementById("filterSelect");
const sort = document.getElementById("sortSelect");
const btn = document.getElementById("btn");
const body = document.getElementById("body");
const errorMessage = document.getElementById("errorMessage");
const formAdd = document.getElementById("formAdd");


function generateID(length) {
    let characters = "0123456789";
    let id = 'student-';
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * characters.length)
        id += characters[index]
    }
    return id
}

function getData() {
    return JSON.parse(localStorage.getItem('students') || "[]")
}

function setData(student) {
    localStorage.setItem('students', JSON.stringify(student))
}

let studentLocal = getData()


function averageMark(student){
    return ((+student.math + +student.english + +student.science) / 3).toFixed(2)
}

function rank(student){
    let rankStudent = averageMark(student);
    if(rankStudent >= 8){
        return 'Giỏi';
    } else if(rankStudent >= 6.5 && rankStudent < 8 ){
        return 'Khá';
    } else if(rankStudent >=5 && rankStudent < 6.5){
        return 'Trung bình';
    }else{
        return 'Yếu';
    }
}

function render(students = []){
    if(!Array.isArray(students)){
        errorMessage.innerHTML = "Lỗi định dạng dữ liệu";
    }
    if(students.length === 0){
        body.innerHTML = "Không có dữ liệu";
    }
    body.innerHTML = ``
    students.forEach((student) =>{
        const average = averageMark(student);
        const ranks = rank(student);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.math}</td>
            <td>${student.english}</td>
            <td>${student.science}</td>
            <td>${average}</td>
            <td>${ranks}</td>
            <button type="button" class="btn btn-primary" onclick="removeStudent('${student.id}')">Xoá</button>
            <button type="button" class="btn btn-success" onclick="edit('${student.id}')">Cập nhật</button>
        `
        body.appendChild(tr);
    })
}

function addStudent(){

    studentLocal = getData()

    const student = {
        id: generateID(3),
        name: name.value.trim(),
        math: math.value,
        english: english.value,
        science: science.value,
    };
    setData([student,  ...studentLocal])
    render(getData());
}

function removeStudent(id){
    studentLocal = getData()
    studentLocal = studentLocal.filter((s) => s.id !== id)
    setData([...studentLocal])
    render(getData())
    alert("Bạn có chắc chắn muốn xoá không?")
}

function edit(id) {
    studentLocal = getData();
    const student = studentLocal.find((s) => s.id === id);
    if (!student) {
        errorMessage.innerHTML = "Không tìm thấy sinh viên";
        return;
    }
    name.value = student.name;
    math.value = student.math;
    english.value = student.english;
    science.value = student.science;
    name.setAttribute('readonly', true); // Không cho phép chỉnh sửa tên
    btn.innerHTML = "Cập nhật";
    btn.onclick = function () {
        if (validate()) {
            const updatedStudent = {
                ...student,
                math: math.value,
                english: english.value,
                science: science.value
            };
            const updatedData = studentLocal.map(s => s.id === id ? updatedStudent : s);
            setData(updatedData);
            render(getData());
            btn.innerHTML = "Thêm sinh viên";
            name.removeAttribute('readonly'); // Bỏ readonly để thêm sinh viên mới
            name.value = "";
            math.value = "";
            english.value = "";
            science.value = "";
            errorMessage.innerHTML = "";
            btn.onclick = addStudent;
        }
    };
}

function validate() {
    if (!math.value || !english.value || !science.value) {
        errorMessage.innerHTML = "Vui lòng nhập đầy đủ điểm";
        return false;
    }
    if (math.value < 0 || math.value > 10 || english.value < 0 || english.value > 10 || science.value < 0 || science.value > 10) {
        errorMessage.innerHTML = "Điểm phải từ 0 đến 10";
        return false;
    }
    return true;
}


function searchStudents() {
    studentLocal = getData()
    const valueSearch = search.value.toLowerCase()

    const dataSearch = studentLocal.filter(student =>
        student.name.toLowerCase().includes(valueSearch)
    )
    render(dataSearch)
}

function sortStudents() {
    const valueSort = sort.value
    studentLocal = getData()
    if (valueSort === 'desc') {
        studentLocal.sort((a, b) => averageMark(b) - averageMark(a))
    }
    if (valueSort === 'asc') {
        studentLocal.sort((a, b) => averageMark(a) - averageMark(b))
    }
    else {
        studentLocal = studentLocal
    }
    render(studentLocal)
}
function filterStudents() {
    const filterValue = filter.value
    studentLocal = getData()
    if (!filterValue) {
        render();
        return;
    }
    const filtered = studentLocal.filter(student =>
        rank(student) === filterValue
    );
    render(filtered);
}



btn.addEventListener('submit', addStudent)
search.addEventListener('change', searchStudents)
render(getData())
