/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos 
hasta introducir un numero negativo y mostrar el resultado
*/

var suma = 0;
var contador = 0;
var numeroIntroducido;

do{
    numeroIntroducido = parseInt(prompt("Introduce numeros hasta que pongas uno en negativo: ", 0));
    if(isNaN(numeroIntroducido))
    {
        numeroIntroducido = 0;
    }
    else if(numeroIntroducido >= 0){
        suma += numeroIntroducido;
        contador++;
    }
}
while(numeroIntroducido >= 0){
    alert("La suma es: " + suma + " y la media es: " + (suma/contador));
}