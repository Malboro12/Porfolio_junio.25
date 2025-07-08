/*
cómo acceder a un elemento en el array por posición
*/
const lista = [1, 2, 3, 4, 5, 6];
lista[1];
// longitud del array (cuantos elementos hay)
lista.length;
/*
cómo acceder a un elemento en un string por posición
*/
const palabra = "Hola mundo"; // ["H","o","l","a"]
palabra[0];
// longitud del string (cuantas letras, incluidos espacios, tiene)
palabra.length;

/*
bucle para recorrer un array o string
*/
for (let i = 0; i < lista.length; i++) {
    // lista[i]
}

/*
una funciíon para conseguir el valor más bajo de un array
*/
function getLowest(arr) {
    let lowest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(lowest > arr[i]){
            lowest = arr[i];
        }
    }
    return lowest
}
let arrayNuevo = [0, 3, -4, 5];
console.log("lowest:",getLowest(arrayNuevo))

/*
una funcion que devuelva la suma de todos los elementos del array
*/
function getSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    return sum;
}
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const suma1 = getSum(array1);
const suma2 = getSum(array2);
console.log(getSum(array1));
console.log(getSum(array2));

/*
funcion que devuelva la cantidad de una letra especifica en una palabra"

*/
function getRepetitions(word, letter) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        const currentLetter = word[i];
        if (currentLetter === letter) {
            sum++; // sum +=1
        }
    }
    return sum;
}

const frase = "Hola esto es una prueba";
const letra = " ";
console.log("repeticiones:", getRepetitions(frase, letra));


/*
función que devuelve true si existe un elemento en un array y sino devuelve false
*/

function isInArray(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    // si llegamos hasta aqui, no ha habido coincidencias
    return false;
}
const miArray = [1, 2, 3, 4]
const elemento = 3;
const existeElNumero = isInArray(miArray, elemento);
console.log(existeElNumero)
/*
función que muestra en consola las letras pares de un string
*/

function logEven(word) {
    // for(let i = 0; i < word.length; i++){
    //     if(i % 2 === 0){
    //         console.log(word[i]);
    //     }
    // }
    for (let i = 0; i < word.length; i += 2) {
        console.log(word[i]);
    }
}

const palabra2 = "Hola";
logEven(palabra2);