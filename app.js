let listaDeNombres = [];
let indiceGanador = "";

function agregarNombres(nombre) {
    listaDeNombres.push(nombre);
    document.getElementById('amigo').value = "";
}

function validarNombre() {
    let nombreIngresado = document.getElementById('amigo').value;
    
    if (nombreIngresado === ""){
        alert("Por favor agregue un nombre valido");
        return false;
    } else {
        agregarNombres(nombreIngresado);

        if (listaDeNombres.length > 1){
            document.querySelector('#boton-sorteo').removeAttribute('disabled');
        }
        console.log(listaDeNombres);
        return true;
    }
}

function verLista() {
    return listaDeNombres;
}

function sortearNombre() {
    indiceGanador = Math.floor(Math.random()*lista.length);
    return listaDeNombres[indiceGanador];
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
