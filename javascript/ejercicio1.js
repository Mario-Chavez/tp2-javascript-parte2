/* 
1- Crear un array llamado meses y que almacene el nombre de los doce 
meses del año. Mostrar por pantalla en forma de lista  los doce
 nombres del arreglo.
*/

let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

function mostrarMeses(titulo = "no tiene titulo disponible", arregloDeMeses) {
    document.write(`<h2>${titulo}  </h2>`);
    document.write(`<ul>`);

    arregloDeMeses.map((meses) => document.write(`<li>${meses}</li>`));

    document.write(`</ul>`);
}

mostrarMeses("Meses del Año", meses);
