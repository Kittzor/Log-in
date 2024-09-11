//Added every element from html
const usernameInp = document.querySelector(".username");
const passwordInp = document.querySelector(".password");
const logInBtn = document.querySelector(".logInBtn");
const loggedInName = document.querySelector(".loggedInName");
const logOutBtn = document.querySelector(".logOutBtn");
const backBtn = document.querySelector(".backBtn");
const welcomePage = document.querySelector(".Welcome");
const loggedInPage = document.querySelector(".loggedIn");
const errorPage = document.querySelector(".error");

// hardcoded testvalues
const username = "test";
const password = "1234";

//Check if user is already logged in
const checkUser = localStorage.getItem("username");
//console.log("checkuser", checkUser)
if (checkUser) {
  welcomePage.classList.add("hide"); //Adds hide to the welcome element and hides the welcome page
  loggedInPage.classList.remove("hide"); //Removes the hide and shows the loggedIn page
}
//log in function
logInBtn.addEventListener("click", () => {
  if (usernameInp.value === username && passwordInp.value === password) {
    //Add and remove class hide to the elements.
    welcomePage.classList.add("hide");
    loggedInPage.classList.remove("hide");
    localStorage.setItem("username", username);
    loggedInName.innerHTML = username; //Types out the username
  } else {
    welcomePage.classList.add("hide");
    errorPage.classList.remove("hide");
  }
  usernameInp.value = "";
  passwordInp.value = "";
});

//when the logOutBtn is clicked, clear the localstorage and show the welcomePage
logOutBtn.addEventListener("click", () => {
  localStorage.clear();
  loggedInPage.classList.add("hide");
  welcomePage.classList.remove("hide");
});

//when the backBtn is clicked show the welcomePage
backBtn.addEventListener("click", () => {
  errorPage.classList.add("hide");
  welcomePage.classList.remove("hide");
});
