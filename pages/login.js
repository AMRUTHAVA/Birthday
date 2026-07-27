function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Button clicked");

    if (username === "PAPA" && password === "0506") {

        console.log("Correct Password");

        sessionStorage.setItem("loggedIn", "true");

        console.log(sessionStorage.getItem("loggedIn"));

        window.location.replace("../index.html");

    } else {

        alert("Wrong Name or Password 💔");

    }

}