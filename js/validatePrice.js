function validatePrice(tipoDeFormulario){
    const regex = /^[0-9]+$/;
    const precioEsValido = document.getElementsByClassName("clothing-price");
    const precioValido = "Precio valido";
    const precioInvalido = "Precio no valido";

    if(tipoDeFormulario.id == "clothing-price"){
        precioEsValido[0].innerHTML='';
        precio = tipoDeFormulario.value;
        if(precio.match(regex)){
            precioEsValido[0].innerHTML= precioValido;
            precioEsValido[0].classList.remove("invalid-color");
            precioEsValido[0].classList.add("valid-color");
            tipoDeFormulario.classList.remove("invalid-border");
            tipoDeFormulario.classList.add("valid-border");
        }
        if(!precio.match(regex)){
            precioEsValido[0].innerHTML= precioInvalido;
            precioEsValido[0].classList.remove("valid-color");
            precioEsValido[0].classList.add("invalid-color");
            tipoDeFormulario.classList.add("invalid-border");
            tipoDeFormulario.classList.remove("valid-border");
        }
    }

}