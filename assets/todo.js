const todoForm = document.querySelector("#js-todoForm"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector("#js-todoList");

const todos_LS = "todos";

let todos_arr = [];

function delTodos() {
  // need to know which icon is clicked
  const del = event.target;
  // parent of icon
  const li = del.parentNode;
  todoList.removeChild(li);

  // after del todos
  // make new arr in the local storage
  const removedTodos = todos_arr.filter(todo => {
    // only not clicked todos
    // li.id = string => num
    return todo.id !== parseInt(li.id);
  });
  todos_arr = removedTodos;

  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  // no showing issue => text
  todoInput.value = "";
  showTodos(currentValue);
}

function saveTodos() {
  localStorage.setItem(todos_LS, JSON.stringify(todos_arr));
}

function showTodos(text) {
  const li = document.createElement("li");
  const icon = document.createElement("i");
  const strong = document.createElement("strong");
  // list up todos to follow order
  const newId = todos_arr.length + 1;

  todoList.appendChild(li);
  li.appendChild(icon);
  // when put in a todo, also put in an icon
  icon.setAttribute("class", "fas fa-trash-alt");
  // click icon, del todo
  icon.addEventListener("click", delTodos);
  // put in text to list with separated tag
  li.appendChild(strong);
  strong.innerHTML = text;
  li.id = newId;

  // manage data
  // when load data, refresh id num by order
  const todos_obj = {
    text: text,
    id: newId
  };
  // push object to arr
  todos_arr.push(todos_obj);

  saveTodos();
}

function loadTodos() {
  // load saved data of todos
  const loadTodos = localStorage.getItem(todos_LS);
  if (loadTodos !== null) {
    // has todos
    // string => json(object)
    const parsedTodos = JSON.parse(loadTodos);
    // each todos are showed
    parsedTodos.forEach(todo => {
      // only text of the object is showed
      showTodos(todo.text);
    });
  }
}

function init() {
  // load saved todos
  loadTodos();
  // not always load and input todos are happened at same time
  // input new todo
  todoForm.addEventListener("submit", handleSubmit);
}

init();
