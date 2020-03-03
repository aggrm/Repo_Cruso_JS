/*
Pedir 2 numeros y que nos diga cual es el mayor, el menor y si sion iguales
PLUS: si los numero son menores de 0 o NaN, volver a pedirlos numeros
*/
var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


while(numero2 <= 0 || numero1 <= 0 || isNaN(numero1) || isNaN(numero2)){
    alert("Por favor, selecione numeros mayores que 0 y que sean numericos");
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0))
}

console.log(numero1, numero2);

if(numero1 > numero2)
{
    alert("El numero " + numero1 + " es mayor que el numero " + numero2);
}
else if(numero1 < numero2){
    alert("El numero " + numero2 + " es mayor que el numero " + numero1);
}
else if(numero2 == numero1)
{
    alert('Los numeros ' + numero1 + ' y ' + numero2 +' son iguales');
}else{
    alert('Introduce numeros validos');
}