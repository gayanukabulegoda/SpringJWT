import { saveUser } from "../model/SignUpModel.js";

function getFormData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;

  return {
    email,
    password,
    name,
  };
}

function handleSignUp(event) {
  event.preventDefault();

  const userData = getFormData();

  saveUser(userData)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      console.log("User registered successfully:", response);
      window.location.href = "/pages/dashboard.html";
    })
    .catch((error) => {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    });
}

document.getElementById("sign-up-btn").addEventListener("click", handleSignUp);
