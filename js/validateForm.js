function validarEmail(tipoDeFormulario) {
    const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    const textoDeEsValido = document.getElementsByClassName("email-valido");
    const emailValido = "Email valido";
    const emailInvalido = "Email no valido";

    if (tipoDeFormulario.id == "email-login") {
        textoDeEsValido[0].innerHTML = '';
        email = tipoDeFormulario.value;
        if (email.match(regex)) {
            textoDeEsValido[0].innerHTML = emailValido;
            textoDeEsValido[0].classList.remove("invalid-color");
            textoDeEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!email.match(regex)) {
            textoDeEsValido[0].innerHTML = emailInvalido;
            textoDeEsValido[0].classList.remove("valid-color");
            textoDeEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    } else {
        textoDeEsValido.innerHTML = '';
        email = tipoDeFormulario.value;
        if (email.match(regex)) {
            textoDeEsValido[1].innerHTML = emailValido;
            textoDeEsValido[1].classList.remove("invalid-color");
            textoDeEsValido[1].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!email.match(regex)) {
            textoDeEsValido[1].innerHTML = emailInvalido;
            textoDeEsValido[1].classList.remove("valid-color");
            textoDeEsValido[1].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }
}

function borrarTextoForm() {
    const formLogin = document.forms["login"];
    formLogin["email"].value = "";
    formLogin["password"].value = "";
    const formRegistro = document.forms["register"];
    formRegistro["email"].value = "";
    formRegistro["nombreusuario"].value = "";
    formRegistro["password"].value = "";
    formRegistro["passwordrepeat"].value = "";
    const textoDeEsValido = document.getElementsByClassName("email-valido");
    textoDeEsValido[0].innerHTML = "";
    textoDeEsValido[1].innerHTML = "";
    const bordeInputLogin = document.getElementById("email-login");
    bordeInputLogin.classList.remove("valid-border");
    bordeInputLogin.classList.remove("invalid-border");
    const bordeInputRegistro = document.getElementById("email-register");
    bordeInputRegistro.classList.remove("valid-border");
    bordeInputRegistro.classList.remove("invalid-border");
}




function validatePasswordLogin(tipoDeFormulario) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const textoDeEsValido = document.getElementsByClassName("contraseña-valida");
    const contraseñaValida = "Contraseña valida";
    const contraseñaInvalida = "Contraseña no valida";


    if (tipoDeFormulario.id == "contraseña-login") {
        textoDeEsValido[0].innerHTML = '';
        contraseña = tipoDeFormulario.value;
        if (contraseña.match(regex)) {
            textoDeEsValido[0].innerHTML = contraseñaValida;
            textoDeEsValido[0].classList.remove("invalid-color");
            textoDeEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!contraseña.match(regex)) {
            textoDeEsValido[0].innerHTML = contraseñaInvalida;
            textoDeEsValido[0].classList.remove("valid-color");
            textoDeEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }
}


function validarNombre(tipoDeFormulario) {
    const regex = /^[a-zA-Z ]{2,30}$/;
    const textoDeEsValido = document.getElementsByClassName("nombre-valido");
    const nombreValido = "Nombre valido";
    const nombreInvalido = "Nombre no valido";


    if (tipoDeFormulario.id == "nombre-register") {
        textoDeEsValido[0].innerHTML = '';
        nombre = tipoDeFormulario.value;
        if (nombre.match(regex)) {
            textoDeEsValido[0].innerHTML = nombreValido;
            textoDeEsValido[0].classList.remove("invalid-color");
            textoDeEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!nombre.match(regex)) {
            textoDeEsValido[0].innerHTML = nombreInvalido;
            textoDeEsValido[0].classList.remove("valid-color");
            textoDeEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }

}

function validatePasswordRegister(tipoDeFormulario) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const textoDeEsValido = document.getElementsByClassName("contraseña-valida");
    const contraseñaValida = "Contraseña valida";
    const contraseñaInvalida = "Contraseña no valida";


    if (tipoDeFormulario.id == "password-register") {
        textoDeEsValido[0].innerHTML = '';
        contraseña = tipoDeFormulario.value;
        if (contraseña.match(regex)) {
            textoDeEsValido[0].innerHTML = contraseñaValida;
            textoDeEsValido[0].classList.remove("invalid-color");
            textoDeEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!contraseña.match(regex)) {
            textoDeEsValido[0].innerHTML = contraseñaInvalida;
            textoDeEsValido[0].classList.remove("valid-color");
            textoDeEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }
}

// Function to check Whether both passwords 
// is same or not. 
function checkPassword(tipoDeFormulario) {
    password1 = tipoDeFormulario.password - register.value;
    password2 = tipoDeFormulario.passwordrepeat.value;

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const textoDeEsValido = document.getElementsByClassName("contraseña-valida");
    const contraseñaValida = "Contraseña valida";
    const contraseñaInvalida = "Contraseña no valida";


    if (tipoDeFormulario.id == "repeat-password-register") {
        textoDeEsValido[0].innerHTML = '';
        password2 = tipoDeFormulario.value;
        if (contraseña.match(password1)) {
            textoDeEsValido[0].innerHTML = contraseñaValida;
            textoDeEsValido[0].classList.remove("invalid-color");
            textoDeEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!contraseña.match(regex)) {
            textoDeEsValido[0].innerHTML = contraseñaInvalida;
            textoDeEsValido[0].classList.remove("valid-color");
            textoDeEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }

    // If password not entered 
    if (password1 == '') {
        alert("Please enter Password");
    }
    // If confirm password not entered 
    else if (password2 == '') {
        alert("Please enter confirm password");
    }
    // If Not same return False.     
    else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True. 
    else {
        alert("Password Match")
        return true;
    }
}




function validatePrice(tipoDeFormulario) {
    const regex = /^[0-9]+$/;
    const precioEsValido = document.getElementsByClassName("clothing-price");
    const precioValido = "Precio valido";
    const precioInvalido = "Precio no valido";

    if (tipoDeFormulario.id == "clothing-price") {
        precioEsValido[0].innerHTML = '';
        precio = tipoDeFormulario.value;
        if (precio.match(regex)) {
            precioEsValido[0].innerHTML = precioValido;
            precioEsValido[0].classList.remove("invalid-color");
            precioEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if (!precio.match(regex)) {
            precioEsValido[0].innerHTML = precioInvalido;
            precioEsValido[0].classList.remove("valid-color");
            precioEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }

}