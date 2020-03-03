/*
Que nos diga si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

var numero;

do{
    numero = parseInt(prompt('Introduce un numero: ', 0));
}while(isNaN(numero))

if(numero % 2 == 0)
{
    document.write("El número es par: " + numero);
}else{
    document.write("El número es impar: " + numero);
}