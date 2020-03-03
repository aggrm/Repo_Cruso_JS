//Parametros de REST y SPREAD
//rest es para pasar datos de maneera ordenada con indices.
function listadoFrutas(fruta1, fruta2, ...resto_frutas){
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    console.log(resto_frutas);
}


listadoFrutas("Melon", "Sandia", "Plantano", "Pera", "Coco");


//Spread es para añadir dentro de una array de manera ordenada
var frutas = ["Melon", "Sandia"];
listadoFrutas(...frutas, "Plantano", "Pera", "Coco");

