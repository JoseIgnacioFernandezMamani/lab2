var emailList = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
];
/*
/  / -> delimitadores de la expresion regular
  .match() devuelve null si no coincide con los parametros del filtrado
  y devuelve una cadena si los parametros de cumplen
  \S -> cualquier caracter
  @ -> extrictamente @ en el medio
  .com -> extrictamente .com al final
*/
var filterEmail = emailList.filter(function (email) { return email.match(/\S+@+\S+.com/); });
console.log(filterEmail);
