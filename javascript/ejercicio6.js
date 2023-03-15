/* 
 Solicitar por pantalla al usuario ingresar el valor de los lados de un
 rectángulo, luego crear una función para calcular su perímetro y 
 mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)


*/

let ladoA = prompt("escribe el lado A en numero ");
let ladoB = prompt("escribe el lado B en numero ");

function calcularPerimetroRectangulo(a, b) {
    let perimetro = 2 * (a + b);
    return perimetro;
}

let p = calcularPerimetroRectangulo(ladoA, ladoB);

document.write(`el perimetro es ${p}`);
