/* 
Poner todos los números divisores de numero introducido por el usuario
*/

var numero = parseInt(prompt("Mete un numero", 0));

for(var i = 0; i <=numero; i++){
    if(numero%i == 0)
    {
        document.write(i + " es divisible <br/>");
    }
}