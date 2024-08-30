export function loginUser(loginData, callback) {
  const loginDataJSON = JSON.stringify(loginData);
  const http = new XMLHttpRequest();

  http.onreadystatechange = () => {
    if (http.readyState === 4) {
      if (http.status === 200 || http.status === 201) {
        const response = JSON.parse(http.responseText);
        callback(null, response);
      } else {
        callback(new Error("User Login Unsuccessful"), null);
      }
    }
  };

  http.open("POST", "http://localhost:8080/api/v1/auth/authenticate", true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(loginDataJSON);
}
