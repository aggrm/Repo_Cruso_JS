//Tranformar texto

var num= 444;
var tex= "Hola mundo";
var texto = "esto es texto";


var dato = num.toString();
    dato = tex.toUpperCase();
    dato = texto.toLowerCase();ç

console.log(typeof dato);

//Calcular long

var nombre = "Alberto";
    nombre = ["1", "2", "3333"];

console.log(nombre.length);

//Concatenar

var textTotal= tex + texto;
var textTotal1 = tex.concat(" " + texto);
console.log(textTotal);
console.log(textTotal1);


//busquedas y remplazos

var text1 = "hola que tal";

var busqueda = text1.indexOf("que");
var busqueda1 = text1.search("que");
var busqueda2 = text1.match("que");
var busqueda3 = text1.substr(2, 3);
var busqueda4 = text1.charAt(5);
var busqueda5 = text1.startsWith("hola q");
var busqueda6 = text1.endsWith(" tal");
var busqueda7 = text1.includes("que ");
var remplazo = text1.replace("a" , "ñ");
var remplazo = text1.splice(3 , 8);
var remplazo1 = text1.split(" ");
var remplazo2 = text1.trim(" ");

console.log(busqueda);
console.log(busqueda1);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(remplazo);
console.log(remplazo1);
console.log(remplazo2);
