export function saveUser(userData) {
  return new Promise((resolve, reject) => {
    const userDataJSON = JSON.stringify(userData);
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
      if (http.readyState === 4) {
        if (http.status === 200 || http.status === 201) {
          const response = JSON.parse(http.responseText);
          resolve(response);
        } else {
          reject(new Error("User registration failed"));
        }
      }
    };

    http.open("POST", "http://localhost:8080/api/v1/auth/register", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(userDataJSON);
  });
}
