/**
 * 1. leer el json de notas (podemos usar fs)
 * 2. parsear el json para que nos quede un array de notas (JSON.parse)
 * 3. leemos de la consola los datos que nos dice (podemos usar process.argv)
 * 4. Hacemos un switch dependiendo del valor de process.argv
 *   4.1. Para listar podemos hacer un for mostrando titulo y estado
 *   4.2. Cuando no llega un argumento después del nombre del archivo debemos indicar que no puede estar vacio
 *   4.3. Cuando llega un texto pero no es listar. Debemos *crear* una nueva nota con el estado pendiente
 * 5. La funcionalidad de leer el json debería estar modularizada
 */


const fs = require('fs');
let jsonDeNotas = fs.readFileSync('./notas.json', 'utf-8');
let arrayDeNotas = JSON.parse(jsonDeNotas);

console.log(process.argv);

let nuevaNota = {
    titulo: "Una nueva nota",
    descripcion: "Esta es una nueva nota",
    estado: "pendiente"
}

arrayDeNotas.push(nuevaNota);

let nuevoJsonNotas = JSON.stringify(arrayDeNotas, null, 4);

fs.writeFileSync('./notas.json', nuevoJsonNotas);

