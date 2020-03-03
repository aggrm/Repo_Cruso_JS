/*
Mismo ej que el 13 pero solo los números impares
*/

var num1 = parseInt(prompt('Introduce un número', 0));
var num2 = parseInt(prompt('Introduce un número', 0));

document.write("<h1>Estos son los números impares desde el numero " + num1 + " y el " + num2 + ":</h1>")
while(num1 <= num2){
    
    if(num1 % 2 != 0)
    {
        document.write( num1 + " es numero impar<br/>");
        
    }
    num1++;
}
