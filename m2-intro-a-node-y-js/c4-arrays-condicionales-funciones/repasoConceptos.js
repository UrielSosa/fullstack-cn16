/* Variables (var, let, const) */

// var nombre = 'Gina';
// var nombre = 'Juan Fran';

// let nombre = 'Gina';
// let nombre = 'Juan Fran';

// const nombre = 'Gina';


/* Tipos de datos */
// numero, string, booleano, array, objeto literal
// NaN, null, undefined
let unString = "Sarasa";
let unNumero = 10;
let unBooleano = true || false;
let unUndefined = undefined;
let nulo = null;
let notAnumber = NaN;
let unArray = ['leo', 'Diana'];
let unObjeto = {
    nombre: 'Facu',
    apellido: '',
    cursada: 10,
}

/*Operadores */
// Asignación ( = )
// Aritméticos ( + - * / % ++ --)
// numero = numero + 1 == numero++
// Comparación ( < > == === != !== <= >=) 
// Lógicos ( !true )

// Funciones
function anterior (n) {
    return n - 1;
}

const triple = function (n) {
    return n * 3;
}

const anteriorDelTriple = function (n) {
    return anterior(triple(n))
}

// Condicionales
if (true) {
    console.log('Entré a if');
} else {
    console.log('Entré a else');
}

// Arrays
//push, pop, shift, unshift, indexOf, includes, find
