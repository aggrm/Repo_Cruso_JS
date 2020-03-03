function holaMundo(texto){
    var texto_funcion = "Hola mundo soy var local";
    console.log(texto);
    console.log(num);
    console.log(texto_funcion);
}

var num = 12;
var texto = "Hola mundo soy var global";
holaMundo(texto);

//desde aqui no puedo llamar a la variable texto_funcion