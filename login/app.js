const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginButton = document.querySelector(".loginbutton");
const registerButton = document.querySelector(".registerbutton");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

loginButton.addEventListener("click", () => {
  localStorage.setItem("isSignedIn", true);
  alert("Logged In Successfully");
});

registerButton.addEventListener("click", () => {
  localStorage.setItem("isSignedIn", true);
  alert("Registered and Logged In  Successfully");
});
