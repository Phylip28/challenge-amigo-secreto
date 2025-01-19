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
/*

4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se
    seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
    página.

*/