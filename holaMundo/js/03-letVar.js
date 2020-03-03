//Pruebas con let y var

//Prueba de var

var numero = 40; //valor 40

if(true){
    var numero = 50;
    console.log(numero); //Valor 50
}

console.log(numero); //Valor 50

//prueba let

var texto = "hola let";
console.log(texto);

if(true){
    let texto = "hola es let dentro de if";
    console.log(texto); //Valor hola es let dentro de if
}

console.log(texto); //Valor hola let