const btnLogin = document.querySelector("#btn-login");
btnLogin.onclick = function (event) {
    event.preventDefault();
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        //guardar el correo en el localstorage y el password tmbn
        //con setItem, guardamos un valor en localStorage(key.value)
        localStorage.setItem(input.name, input.value);

    });
login();
};


//obtener datos del localstrage
//localStorage.getItem(key)
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");

function login() {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    form.style.display = "none";
    usuarioSection.style.display = "block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}


const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");
const btnCerrarSession = document.querySelector("#cerrar-session");
const usuarioSection = document.querySelector("#usuario-logged");



if (email !== null && password !== null) {
    login();
} else {
    usuarioSection.style.display = "none";
}


btnCerrarSession.onclick = function () {
    // eliminar las variables de localstorage
    //localStorage.removeItem(key)
    localStorage.removeItem("password");
    localStorage.removeItem("email");

    //Mostrar el formulario y ocultar el mensaje del usuario
    form.style.display = "block";
    usuarioSection.style.display = "none";

};