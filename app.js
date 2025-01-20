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
        verLista();

        if (listaDeNombres.length > 1){
            document.querySelector('#boton-sorteo').removeAttribute('disabled');
        }
        console.log(listaDeNombres);
        return true;
    }
}

function verLista() {
    let nombresEnLista = document.getElementById('listaAmigos');
    nombresEnLista.innerHTML = "";

    for (let nombres = 0; nombres < listaDeNombres.length; nombres++){
        let mostrarNombre = document.createElement('li');
        
        mostrarNombre.innerHTML = listaDeNombres[nombres];
        nombresEnLista.appendChild(mostrarNombre);   
    }
}

function sortearNombre() {
    indiceGanador = Math.floor(Math.random()*lista.length);
    return listaDeNombres[indiceGanador];
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}
