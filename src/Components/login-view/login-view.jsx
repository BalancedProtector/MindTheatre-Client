const data = {
    Name: username,
    Password: password
};
fetch("https://mindtheatre.herokuapp.com/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
})
    .then((response) => response.json())
    .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token);
            onLoggedIn(data.user, data.token);
        } else {
            alert("Invalid username or password. Please Try Again.");
        }
    })
    .catch((e) => {
        alert("Something went wrong! Please try again.");
    });