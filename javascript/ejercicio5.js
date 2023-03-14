/* 
 Definir una función que muestre información sobre una cadena de texto que
  se le pasa como argumento. A partir de la cadena que se le pasa, la 
  función determina si esa cadena está formada sólo por mayúsculas, sólo 
  por minúsculas o por una mezcla de ambas.

*/

let cadena = prompt("escribe una cadena de texto ");

if (!isNaN(cadena)) {
    alert("debes escribir una cadena de texto");
} else {
    let mostrarInfoCadena = () => {
        if (cadena === cadena.toUpperCase()) {
            document.write(`La cadena está formada sólo por mayúsculas`);
        } else if (cadena === cadena.toLowerCase()) {
            document.write(`La cadena está formada sólo por minúsculas`);
        } else {
            document.write(
                `La cadena está formada por una mezcla de mayúsculas y minúsculas`
            );
        }
    };
    mostrarInfoCadena(cadena);
}
