//interpolacion 
//dentro de una cadena template string que permite incrustacion de expresiones javascript , que son evaluadas 
//solo si tienes expresion de interpolacin ${}, el interprete de javascript (node) entendera que 
//esta seccion debe ser evaluada
var nombre = 'Jose Fernandez';
var edad = 22;
var mensaje = "Hola, mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
//respeta los saltos de linea mostrados en el mismo formato que lo escrito en forma literal
var multilinea = "jose\nignacio\nfernandez\nmamani\nredes\n2024\ns1\n";
console.log(multilinea);
// se realiza un calculo, se puede realizar acciones dentro de la expresion ${}
var precio = 10;
var cantidad = 5;
var total = "El total es: ".concat(precio * cantidad, " d\u00F3lares");
console.log(total);
