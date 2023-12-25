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
  greeting.innerText = `Hello ${x}`;
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
  loginForm.addEventListener.add("submit", onLoginSubmit);
} else {
  printGreetings(savedUsername);
}
function onLogoutSubmit() {
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
}
