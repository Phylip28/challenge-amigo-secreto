let listaDeNombres = [];
let indiceGanador = "";

function agregarNombres(nombre) {
    return listaDeNombres.push(nombre);
}

function validarNombre() {
    let nombreIngresado = document.getElementById('amigo').value;
    
    if (nombreIngresado == ""){
        alert("Por favor agregue un nombre valido");
    } else {
        if (listaDeNombres.length > 1){
            document.querySelector('#boton-sorteo').removeAttribute('disabled');
        }
        return agregarNombres(nombreIngresado);
    }
}

function verLista() {
    return listaDeNombres;
}

function sortearNombre() {

    if (listaDeNombres.length >= 1){
        indiceGanador = Math.floor(Math.random()*lista.length);
        return listaDeNombres[indiceGanador];
    } 
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHtml = texto;
    
    return;
}