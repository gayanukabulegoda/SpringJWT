import { fetchDashboardData } from "../model/DashboardModel.js";

document.addEventListener("DOMContentLoaded", function () {
  const dashboardHeading = document.getElementById("dashboard-heading");
  const token = localStorage.getItem("token");

  fetchDashboardData(token, (error, responseText) => {
    if (error) {
      dashboardHeading.textContent = "Failed to load data.";
      console.error(error);
    } else {
      dashboardHeading.textContent = responseText; // Display "HI" in the UI
    }
  });

  document.getElementById("exit-btn").addEventListener("click", function () {
    window.location.href = "/index.html";
  });
});
