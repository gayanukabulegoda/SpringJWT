import { loginUser } from "../model/SignInModel.js";

function getLoginData() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  return {
    email,
    password,
  };
}

function handleSignIn(event) {
  event.preventDefault();

  const loginData = getLoginData();

  loginUser(loginData, (error, response) => {
    if (error) {
      console.error(error);
      alert("Login failed. Please try again.");
    } else {
      // Store the token in local storage
      localStorage.setItem("token", response.data.token);
      window.location.href = "/pages/dashboard.html";
    }
  });
}

document.getElementById("sign-in-btn").addEventListener("click", handleSignIn);
