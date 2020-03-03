// una funcion anonima es una funcion sin nombre

var pelicula = function(nombre){
    return "La película es: " + nombre;
}


function sumame(num1, num2, sumaYmuestra, sumaPorDos){
    var suma = num1 + num2;
    sumaYmuestra(suma);
    sumaPorDos(suma)
    return suma;
}

sumame(5,7, (dato)=>{
    console.log("La suma es: ", (dato))
},
(dato)=>{
    console.log("La suama por dos es: ", (dato*2))
})


