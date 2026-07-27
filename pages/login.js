function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "PAPA" && password === "0506") {

        alert("Welcome ❤️");
        window.location.href = "../index.html";

    } else {

        alert("Wrong Name or Password 💔");

    }
}
