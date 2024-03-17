//interpolacion 
//dentro de una cadena template string que permite incrustacion de expresiones javascript , que son evaluadas 
//solo si tienes expresion de interpolacin ${}, el interprete de javascript (node) entendera que 
//esta seccion debe ser evaluada
const nombre = 'Jose Fernandez';
const edad = 22;
const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

//respeta los saltos de linea mostrados en el mismo formato que lo escrito en forma literal
const multilinea = `jose
ignacio
fernandez
mamani
redes
2024
s1
`;
console.log(multilinea);

// se realiza un calculo, se puede realizar acciones dentro de la expresion ${}
const precio = 10;
const cantidad = 5;
const total = `El total es: ${precio * cantidad} dólares`;
console.log(total); 
