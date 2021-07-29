window
  .fetch("https://secret-peak-42801.herokuapp.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "user-01", password: "password-01" }),
  })
  .then((res) => res.json().then((data) => console.log(data)));
