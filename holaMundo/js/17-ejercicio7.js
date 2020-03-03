/*
Tabla de multiplicar del numero introducido.
*/

var numero;

do{
    numero = parseInt(prompt('Introduce un numero: ', 0));
}while(isNaN(numero))

for(var i = 1; i <= 10; i++){
    document.write(i + " x " + numero + " = " + (i*numero) + "<br/>");
}

//Todas las tablas hasta el 10

for(var t = 0 ; t <= 10; t++){
    document.write("<h1>Tabla del: " + t + "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i + " x " + t + " = " + (i*t) + "<br/>");
    }
}