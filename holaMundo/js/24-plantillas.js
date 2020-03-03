var nomber = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

//var texto = "Mi nombre es: " + nomber + "<br> Mis apellidos: " + apellidos;

var texto = `
    <h1>Hola que tal</h1>
    <h3> Mi nombre es: ${nomber}</h3>
    <h3> Mis apellidos son: ${apellidos}</h3>
`;

document.write(texto);
