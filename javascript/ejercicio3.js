/* 
2-  Crear un script que solicite al usuario mediante un prompt el nombre
 de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona 
 cancelar se debe mostrar el arreglo generado, luego realizar las 
 siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y
 última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de
 'Barcelona'.


*/

let ciudades = [];
while (true) {
    let ciudad = prompt("Introduce el nombre de una ciudad:");

    if (ciudad === null) {
        break;
    } else {
        ciudades.push(ciudad);
    }
}
function Mostrarciudades(ciudades) {
    document.write(`<ul>`);
    ciudades.push("Paris");
    ciudades.splice(1, 0, "Barcelona");

    ciudades.map((ciudad) => document.write(`<li>${ciudad}</li>`));

    document.write(`</ul>`);
    document.write(`las ciudades que introdujiste son ${ciudades.length} </br>`);
    document.write(`la primera ciuidad que dijiste es  ${ciudades[0]} </br>`);
    document.write(`la tercer ciuidad que dijiste es  ${ciudades[2]} </br>`);
    document.write(
        `la ultima ciuidad que dijiste es  ${ciudades[ciudades.length - 1]} </br>`
    );
}

Mostrarciudades(ciudades);
