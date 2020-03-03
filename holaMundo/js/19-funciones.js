//FUNCIONES

function porconsola(numero1, numero2){
    console.log("Suma: " + (a + b));
    console.log("Resta: " + (a - b));
    console.log("Division: " + (a / b));
    console.log("Multiplicacion: " + (a * b));    
    console.log("******************************");
} 
function porpantalla(numero1, numero2){
    document.write("Suma: " + (a + b) + "<br/>");
    document.write("Resta: " + (a - b)+ "<br/>");
    document.write("Division: " + (a / b)+ "<br/>");
    document.write("Multiplicacion: " + (a * b) + "<br/>");    
    document.write("****************************** <br/>");
}

//En esta clase tenemos el concepto de parametros,  funciones y parametros opcionales.
function calculadora(a, b, mostrar = true){

    if(mostrar == true)
    {
        porconsola(a,b);
    }
    else
    {
        porpantalla(a,b);
    }
    
}

//var resultado = calculadora();
//var num = parseInt(prompt("Introduce numero", 0));
//var num2 = parseInt(prompt("Introduce numero", 0));
//calculadora(num,num2);
calculadora(1,100);
calculadora(325658, 9856854, false);
calculadora(500, 200, false);


