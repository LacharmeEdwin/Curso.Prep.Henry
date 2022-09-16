// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  // var matriz = [];
  // for (let clave in objeto) {
  //   matriz.push([clave, objeto[clave]]);
  // }
  // return matriz;

  return Object.entries(objeto);

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var matrix = {};
  var cont = 0;
  var long = string.length;
  var aux = string;
  var flag = false;
  for (let j = 0; j < long; j++){
    cont = 0;
    for (let i = 0; i < long; i++) {
      if (string[i] == aux[j]) {
        cont++;
      }
    }
    for (let clave in matrix){
      if(matrix.clave == aux[j]){
        flag = true;
      }
    }
    if (flag != true){
      matrix[aux[j]] = cont;
    }
    else{
      flag = false;
    }
  }
  return matrix;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var aux = '';
  for (var i = 0; i < s.length; i++) {
    if(s[i] == s[i].toUpperCase()){
      aux += s[i];
      s = s.replace(s.charAt(i), '');
      i--;
    }
  }
  return aux + s;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabra = '';
  var complet = '';
  var init = 0;
  for (let i = 0; i < str.length; i++){
    if(str.charAt(i) === ' ') {
      for(let j = i-1; j >= init; j--) {
        palabra += str.charAt(j);
      }
      complet = complet + palabra + ' ';
      palabra = '';
      init = i + 1;
    }else if (i == str.length - 1){
      for(let j = i; j >= init; j--) {
        palabra += str.charAt(j);
      }
      complet = complet + palabra;
    }
  }
  return complet;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numCapicua = parseInt(numero.toString().split('').reverse().join(''), 10);
  if (numero === numCapicua) {
    return "Es capicua";
  } else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var cadenaABC = '';
  for (let i = 0; i < cadena.length; i++){
    if(cadena[i] != 'a' && cadena[i] != 'b' && cadena[i] != 'c'){
      cadenaABC += cadena[i];
    }
  }
  return cadenaABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrAux = [];
  var arrOrg = [];
  var pos = 0;
  for(let i = 0; i < arr.length; i++){
    arrAux.push(arr[i].length.toString()+','+i.toString());
  }
  arrAux.sort();
  for(let i = 0; i < arr.length; i++){
    pos = parseInt(arrAux[i].split(',')[1],10);
    arrOrg.push(arr[pos]);
  }
  return arrOrg;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  
  // var inter = [];
  // for(let i = 0; i < arreglo1.length; i++){
  //   for(let j = 0; j < arreglo2.length; j++){
  //     if(arreglo1[i] == arreglo2[j]){
  //       inter.push(arreglo1[i]);
  //     }
  //   }
  // }
  var inter = [];
  for(let i = 0; i < arreglo1.length; i++){
    if(arreglo2.find(element => element == arreglo1[i])){
      inter.push(arreglo1[i]);
    }
  }

  return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

