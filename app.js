/* 
    Funciones
    
    4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se
    seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
    página.
*/

let listaDeNombres = [];
let ingresarNombre = "";

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
/*

3. Visualizar la lista: Los nombres ingresados aparecerán en una lista
debajo del campo de entrada.

*/