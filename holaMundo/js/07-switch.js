//Switch

var edad = 18;
var imprime;

switch(edad){
    case 18:
        imprime="acaba de cumplir la mayoria de edad";
    break;
    case 21:
        imprime="acaba de cumplir la mayoria de edad en EEUU";
    break;
    case 25:
        imprime="Eres un adulto";
    break;
    case 40:
        imprime="Crisis de los cuarenta";
    break;
    case 70:
        imprime="Eres un anciano";
    break;
    default:
        imprime = "Tu edad es neutra";
    break;
}

console.log(imprime);
    