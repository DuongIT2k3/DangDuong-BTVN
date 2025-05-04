let todos = JSON.parse(localStorage.getItem("todos")) || [];  //lấy ds công việc, chưa có thì gán [] JSON.parse là chuyển chuỗi json thành mảng obj
let currentFilter = "all"; //biến để nhớ trạng thái lọc
let editIndex = -1; // biến dùng để xem có công việc đang sửa ko. Nếu = -1 là k sửa

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));   // chuyển mảng thành chuỗi lưu vào localstorage
}

function renderTodos() {
  const todoList = document.getElementById("todoList"); //lấy nội dung <ul> và xoá nội dung cũ để hiển thị danh sách
  todoList.innerHTML = "";

  //lọc danh sách theo trạng thái
  let filtered = todos.filter(todo => {
    if (currentFilter === "active") return !todo.completed;
    if (currentFilter === "completed") return todo.completed;
    return true;
  });

  /**
   * lặp qua từng công việc, tạo thẻ <li>, hiển thị nội dung
   * nếu complete = true thì gạch ngang chữ
   * gắn sk để toggle hoàn thành
   */
  filtered.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.style.textDecoration = todo.completed ? "line-through" : "none";
    li.onclick = () => toggleComplete(index);

    // tạo nút sửa: đưa nội dung vào input, ghi nhớ chỉ số index

    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.onclick = (e) => {
      e.stopPropagation();
      document.getElementById("todoInput").value = todo.text;
      editIndex = index;
      document.getElementById("actionButton").textContent = "Cập nhật";
    };

    //tạo nút xoá, xoá phần tử tại index lưu lại và hiển thị danh sách 
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    };

    li.appendChild(editBtn);  //thêm hai nút vào <li>, và thêm vào ds
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
//lấy nội dung ng dùng nhập, trim() để bỏ khoảng trắng
function addTodo() {
  const input = document.getElementById("todoInput");
  const error = document.getElementById("errorMessage");
  const text = input.value.trim();

  //nếu để trống thông báo lỗi rồi dừng
  if (!text) {
    error.style.display = "block";
    return;
  }
  error.style.display = "none";
   //nếu đang sửa: cập nhật nội dung
   //nếu k thêm công việc vs trạng thái false
  if (editIndex >= 0) {
    todos[editIndex].text = text;
    editIndex = -1;
    document.getElementById("actionButton").textContent = "Thêm";
  } else {
    todos.push({ text, completed: false });
  }
  //xoá nội dung ô input
  //lưu dữ liệu và hiển thị ds

  input.value = "";
  saveTodos();
  renderTodos();
}

// đánh dấu hoàn thành: đổi trạng thái completed lưu và hiển thị lại

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}
// cập nhật trạng thái lọc
function filterTodos(status) {
  currentFilter = status;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active")); //xoá active ở các nút
  event.target.classList.add("active"); // thêm active cho nút đang click làm nổi bật
  renderTodos();
}

renderTodos(); //gọi để cập nhật ds, hiển thị dữ liệu từ localStorage.
