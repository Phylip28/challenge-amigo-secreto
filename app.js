let listaDeNombres = [];
let indiceGanador = "";

function agregarNombres(nombre) {
    listaDeNombres.push(nombre);
    limpiarEntrada();
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
        return true;
    }
}

function verLista() {

    let nombresEnLista = asignarTextoElementosId('listaAmigos',"");

    for (let nombres = 0; nombres < listaDeNombres.length; nombres++){
        mostrarNombre = crearElementos('li',listaDeNombres[nombres]);
        nombresEnLista.appendChild(mostrarNombre);   
    }
}

function sortearNombre() {
    let ganador = asignarTextoElementosId('resultado',"");
    
    indiceGanador = Math.floor(Math.random()*listaDeNombres.length);
    listarGanador = crearElementos('li',listaDeNombres[indiceGanador]);
    ganador.appendChild(listarGanador);

    document.getElementById('boton-reiniciar').removeAttribute('disabled');
}

function asignarTextoElementosId(id, texto){
    let idElemento = document.getElementById(id);
    idElemento.innerHTML = texto;

    return idElemento;
}

function crearElementos(elemento, texto){
    let nuevoElemento = document.createElement(elemento);
    nuevoElemento.innerHTML = texto;

    return nuevoElemento;
}

function limpiarEntrada(){
    document.getElementById('amigo').value = "";
}

function reiniciarSorteo() {
    listaDeNombres = [];
    indiceGanador = "";
    limpiarEntrada();

}
