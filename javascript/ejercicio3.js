/* 
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función
 Math.random para obtener números aleatorios entre 1 y 6 para cada uno de
los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50
 veces esta operación.

*/

let suma = [];

while (suma.length < 50) {
    let dado1 = Math.floor(Math.random() * 6);
    let dado2 = Math.floor(Math.random() * 6);

    let sumaDeDados = dado1 + dado2;
    suma.push(sumaDeDados);
}

function MostrarArray(suma) {
    document.write(`La suma de cada aperaciones es = `);
    suma.map((num) => document.write(`<li>${num}</li>`));
}

MostrarArray(suma);
