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
        agregarNombres(nombreIngresado);
    }
}

function verLista() {
    return listaDeNombres;
}

function sortearNombre(lista) {
    if (lista.length == 0){
        return alert("");
    } else {
        indiceGanador = Math.floor(Math.random()*lista.length);
        return listaDeNombres[indiceGanador];
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHtml = texto;
    
    return;
}