window
  .fetch("https://anywherefitness43.herokuapp.com/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "sunil123", password: "test" }),
  })
  .then((res) => res.json().then((data) => console.log(data)));
