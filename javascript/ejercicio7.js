/* 
Escriba un script que muestre la tabla de multiplicar de un número
 ingresado por pantalla, la creación de la tabla debe ser realizada con
  una función y mostrar solo los resultados del 1 al 10 del número 
  elegido por el usuario.
  
  */

let numeroIngresado = parseInt(prompt("Ingresa un numero "));

if (!isNaN(numeroIngresado)) {
    let tablaMultiplicar = (num) => {
        document.write(`
          ${num} * 1 = ${num * 1} </br> 
          ${num} * 2 = ${num * 2} </br>
          ${num} * 3 = ${num * 3} </br>
          ${num} * 4 = ${num * 4} </br>
          ${num} * 5 = ${num * 5} </br>
          ${num} * 6 = ${num * 6} </br>
          ${num} * 7 = ${num * 7} </br>
          ${num} * 8 = ${num * 8} </br>
          ${num} * 9 = ${num * 9} </br>
          ${num} * 10 = ${num * 10} </br>
       `);
    };

    tablaMultiplicar(numeroIngresado);
} else {
    alert("debes ingresar un numero");
}
