/* 
    Funciones

    3. Visualizar la lista: Los nombres ingresados aparecerán en una lista
    debajo del campo de entrada.

    4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se
    seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
    página.
*/

let nombres = [];
let ingresarNombre = "";

function agregarNombres(nombre) {
    return nombres.push(nombre);
}

function validarNombre(nombre) {
    let Aprobado = True;
    
    if (nombre == ""){
        alert("Por favor ingrese un nombre valido");
        return Aprobado = false;
    }

    return Aprobado;
}

/*
2. Validar entrada: Si el campo de texto está vacío, 
    el programa mostrará una alerta pidiendo un nombre válido.
*/