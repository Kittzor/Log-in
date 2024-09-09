//Added every element from html
const usernameInp = document.querySelector(".username");
const passwordInp = document.querySelector(".password");
const logInBtn = document.querySelector(".logInBtn");
const loggedInName = document.querySelector(".loggedInName");
const logOutBtn = document.querySelector(".logOutBtn");
const backBtn = document.querySelector(".backBtn");
const welcome = document.querySelector(".Welcome");
const loggedIn = document.querySelector(".loggedIn");
const error = document.querySelector(".error");

// hardcoded testvalues
const username = "test";
const password = "1234";

//Check if user is already logged in
const checkUser = localStorage.getItem("username");
//console.log("checkuser", checkUser)
if (checkUser) {
  welcome.classList.add("hide");
  loggedIn.classList.remove("hide");
}
//log in function
logInBtn.addEventListener("click", () => {
  if (usernameInp.value === username && passwordInp.value === password) {
    //Add and remove class hide to the elements.
    welcome.classList.add("hide");
    loggedIn.classList.remove("hide");
    localStorage.setItem("username", username);
    usernameInp.value = "";
    passwordInp.value = "";
  } else {
    welcome.classList.add("hide");
    error.classList.remove("hide");
  }
});

//log out function
logOutBtn.addEventListener("click", () => {
  localStorage.clear();
  loggedIn.classList.add("hide");
  welcome.classList.remove("hide");
});

//go back to main page
backBtn.addEventListener("click", () => {
  error.classList.add("hide");
  welcome.classList.remove("hide");
  usernameInp.value = "";
  passwordInp.value = "";
});
