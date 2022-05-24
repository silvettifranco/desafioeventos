alert("Bienvenido a nuestro sistema de solicitud de créditos para empresas constructoras. A continuación lo invitamos a completar los datos que nos solicita el simulador.")
let montoAprobado = 0;
let incrementoporObras = 0;
let incrementoporTrayectoria=0;
let incremento = 0;
let monto=0;
let calificacion = prompt("Bienvenido, por favor para iniciar esta solicitud, necesitamos que ingrese su calificación crediticia: A, B o C ");;
let provincia = prompt("Ingrese la Provincia en la cual se encuentra");
let obras=parseFloat(prompt("Ingrese la Cantidad de obras que su organización ha realizado "));
let trayectoria=parseFloat(prompt("Ingrese la Cantidad de años de trayectoria en la construcción"));

class Beneficiario {
    constructor (nombre, empresa, mail){
        this.nombre = prompt("Ingrese el nombre y apellido del solicitante").toUpperCase();
        this.mail = prompt("Ingrese el correo eletrónico del solicitante").toUpperCase()
        this.empresa = prompt("Ingrese el nombre de la Empresa");
            
    }
}
const Beneficiario1 = new Beneficiario();
console.log(Beneficiario1);

function calculoPorCalificacion(){
    if (calificacion == "A"){
        montoAprobado=2000000;
        console.log(montoAprobado);
        
    } else if (calificacion == "B"){
        montoAprobado = 1500000;
        console.log(montoAprobado);
    } else if (calificacion =="C"){
        montoAprobado = 1000000;
        console.log(montoAprobado);
    }else{
        alert("Usted no posee la calificación crediticia mínima para la gestión del crédito");
    }
}
calculoPorCalificacion();

function calculoPorObras(){
    if(obras >=10){
        incrementoporObras = 250000;
        console.log(incrementoporObras);
    }else{
        console.log(incrementoporObras);
    }
}
calculoPorObras();

function calculoPorTrayectoria(){
    if(trayectoria >= 3){
        incrementoporTrayectoria = 100000;
        console.log(incrementoporTrayectoria);
    }else{
        console.log(incrementoporTrayectoria);
    }
}
calculoPorTrayectoria();


function calculoporUbicacion(){
    if(provincia == "Mendoza"){
        incremento =150000;
        console.log(incremento);
    } else{
        console.log(incremento);
    }
}
calculoporUbicacion();

function montoTotal() {
    monto=(montoAprobado+incrementoporObras+incremento+incrementoporTrayectoria);
    console.log(monto);
}

montoTotal();

alert("El monto total que su empresa puede obtener de este financiamiento es de: $ARS" + monto);



