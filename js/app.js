// Función de flecha - función lambda
const USER = "user@gmail.com";
const PWD = "12345";

$("#frmLogin").submit((event) => {
    event.preventDefault();
    let usuario = document.getElementById("staticEmail").value;
    let password = document.getElementById("inputPassword").value;

    if (usuario == USER && password == PWD) {
        alert("ACCESO AL SISTEMA...");
        localStorage.setItem("logged", 1);
        window.location = "home.html";
    } else {
        alert("DATOS INCORRECTOS...");
        localStorage.setItem("logged", 0);
    }
});