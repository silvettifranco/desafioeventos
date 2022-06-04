
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", escribirNombre);

function escribirNombre() {
    let nombre = document.getElementById("nombre").value;
    var contenido = "El vehículo ingresado es: <strong>" + nombre + "</strong></p>";
    document.getElementById("resultado").innerHTML = contenido;
}
boton.addEventListener("click", escribirPatente);
function escribirPatente () {
    let patente= document.getElementById("patente").value;
    var contenido2 = "La patente ingresada es: <strong>" + patente + "</strong></p>";
    document.getElementById("resultado2").innerHTML = contenido2;
}
boton.addEventListener("click", escribirTurno);
function escribirTurno () {
    let turno= document.getElementById("turnos").value;
    var contenido3 = "La estadía será por: <strong>" + turno + "</strong></p>";
    document.getElementById("resultado3").innerHTML = contenido3;
}
boton.addEventListener("click", escribirPropietario);
function escribirPropietario () {
    let propietario= document.getElementById("propietario").value;
    var contenido4 = "El propietario del vehículo es: <strong>" + propietario + "</strong></p>";
    document.getElementById("resultado4").innerHTML = contenido4;
}
