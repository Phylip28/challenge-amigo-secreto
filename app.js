let listaDeNombres = [];
let ingresarNombre = "";
let indiceGanador = "";

function agregarNombres(nombre) {
    return listaDeNombres.push(nombre);
}

function validarNombre(nombre) {
    let Aprobado = True;
    
    if (nombre == ""){
        alert("Por favor ingrese un nombre valido");
        return Aprobado = false;
    }

    return Aprobado;
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
    
    return 
}