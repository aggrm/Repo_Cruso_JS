/*
Calculadora:
- Pedir 2 numeros
- Si metemos un NaN que nos los vuelva a pedir.
- lanzar un alert y por consola que nos saque la +, -, /, * de los numeros introducidos
*/

var numero;
var numero2;

do{
    numero = parseInt(prompt('Introduce un numero: ', 0));
    numero2 = parseInt(prompt('Introduce un numero: ', 0));
}while(isNaN(numero))

alert("Suma: " + (numero + numero2) + ", resta: " + (numero - numero2) +
    ", multiplicación: " + (numero*numero2) + 
    ", division: " + (numero/numero2));

console.log("Suma: " + (numero + numero2) + ", resta: " + (numero - numero2) +
", multiplicación: " + (numero*numero2) + 
", division: " + (numero/numero2));