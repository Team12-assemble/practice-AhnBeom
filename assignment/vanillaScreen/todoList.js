const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todoList");
const todoInput = document.querySelector("#todo-form input");
const btn = document.querySelector("#todo-form button");

function deleteTodo(event) {
  const li = event.target.parentNode.parentNode;
  li.remove();
}

function paintTodo(newTodo) {
  const list = document.createElement("li"); // html 'li' 태그 만들기
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerHTML = `<i class="fa-solid fa-check"></i>`;
  button.addEventListener("click", deleteTodo);
  list.append(span, button);
  todoList.appendChild(list); // <li>입력된 할 일</li>
}

function addTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  //버튼에 클릭 이벤트가 발생하면
  if (!newTodo)
    // 할 일 입력창에 내용이 입력되지 않으면 alert 발생
    alert("내용을 입력해 주세요!");
  else {
    paintTodo(newTodo);
    todoInput.value = ""; // 할 일 입력창 초기화 !! newTodo와는 별개임
  }
}
todoForm.addEventListener("submit", addTodo);
