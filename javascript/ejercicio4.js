/* 
1- Escribir el código de una función a la que se pasa como parámetro un
 número entero y devuelve como resultado una cadena de texto que indica
  si el número es par o impar. Mostrar por pantalla el resultado 
  devuelto por la función.

*/
let num = parseInt(prompt("escribe un numero"));

if (!isNaN(num)) {
    const mostrar = () => {
        num % 2 == 0
            ? document.write(`El nùmero ingresado es Par`)
            : document.write(`El nùmero ingresado es Impar`);
    };
    mostrar(num);
} else {
    alert("debes escribir un numero");
}
