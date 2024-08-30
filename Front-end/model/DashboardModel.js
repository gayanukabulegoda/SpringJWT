export function fetchDashboardData(token, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/api/v1/blog/newMethod", true);
  xhr.setRequestHeader("Authorization", "Bearer " + token);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        const responseData = xhr.responseText; // No need to parse
        console.log(responseData);

        callback(null, responseData);
      } else {
        callback(new Error("Failed to load data"), null);
      }
    }
  };

  xhr.send();
}
