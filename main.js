/* Definición de Variables */
let turno=parseInt(prompt("Por favor ingrese su permanencia en hs: 4, 8 , 12 o 24"));
let valor=100;
let monto=turno*valor;

/* Muestra del cálculo del monto de la estadía */

let parrafo = document.createElement("div");
parrafo.innerHTML = "El monto que usted abonará en su permanencia de "+turno+" horas "+", será de $ "+monto;
document.body.appendChild(parrafo); 


let estacionamiento = document.getElementById("autosNuevos");
estacionamiento.appendChild(parrafo); 

/* Ingreso de auto nuevo y definición de array */

const baseDeautos=[];
let marca= prompt ("Ingese la marca de su vehículo");
let modelo=prompt("Ingrese el modelo del mismo");
const nuevaBase=baseDeautos.concat(marca)+" "+baseDeautos.concat(modelo);

let autos = document.getElementById("estacionamiento");
let li = document.createElement("li");
li.innerHTML =nuevaBase;
autos.appendChild(li);







