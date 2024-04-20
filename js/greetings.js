const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoLists = document.querySelector("#todo-form");
const logout = document.querySelector("#logout");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function printGreetings(x) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `안녕하세요! ${x}님`;
  todoLists.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username); //(keyname, valuename) mini DB
  printGreetings(username);
}
loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  printGreetings(savedUsername);
}
function onLogout() {
  logout.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  todoLists.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(TODOS_KEY);
  window.location.reload();
}
logout.addEventListener("click", onLogout);
