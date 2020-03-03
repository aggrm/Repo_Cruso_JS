/*
Mostrar todos los numeros entre los que introduzca el usuario.
*/

var numero1 = parseInt(prompt("Introduce un numero", 0));
var numero2 = parseInt(prompt("Introduce un numero", 0));
var lista;


do{
    numero1 = parseInt(prompt("Introduce un numero", 0));
    numero2= parseInt(prompt("Introduce un numero", 0));
}while(isNaN(numero2) || isNaN(numero1))

if(numero1 > numero2){
    document.write("<h1>Del numero " + numero1 + " a numero " + numero2 + " estan estos numeros:</h1>");
    for(var i = numero1; i <= numero2; i++){
        document.write(i + "<br/>");    
    }
}else if(numero1 < numero2){
    document.write("<h1>Del numero " + numero2 + " al numero " + numero1 + " estan estos numeros:</h1>");
    for(var j = numero2; j <= numero1; j--){
        document.write(j + "<br/>");
    }
}else if(numero1 == numero2){
    document.write("<h1>Del numero " + numero1 + " a numero " + numero2 + "estan estos numeros:</h1>");
    document.write("Son iguales, no puede haber numeros de por medio");
}




