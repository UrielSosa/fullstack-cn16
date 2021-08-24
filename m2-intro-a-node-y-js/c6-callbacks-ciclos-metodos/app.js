// Nos sirve para ver info o manejar archivos de mi computadora
const fs = require('fs');

let jsonDeNotas = fs.readFileSync('./notas.json', 'utf-8'); 

let arrayDeNotas = JSON.parse(jsonDeNotas); 

// Hace referencia a la consola
let referencia = process.argv[2];

switch (referencia) {
    case 'listar':
        console.log('Este es tu listado de notas');
        console.log(`----------------------`);
        arrayDeNotas.forEach(function (nota) {
            console.log(`Titulo: ${nota.titulo}`);
            console.log(`Estado: ${nota.estado}`);
            console.log(`----------------------`);
        });
        break;
    case 'filtrar':
        let filtrado = arrayDeNotas.filter(function (nota) {
            return nota.estado === 'pendiente';
        })
        filtrado.forEach(function (nota) {
            console.log(`Titulo: ${nota.titulo}`);
            console.log(`Estado: ${nota.estado}`);
            console.log(`----------------------`);
        });
        break;
    case 'modificar':
        let notaAmodificar = arrayDeNotas.find(nota => {
            return nota.titulo === 'Intro a js';
        });
        notaAmodificar.titulo = 'Intro a algo';
            
        arrayDeNotas.forEach(function (nota) {
            console.log(`Titulo: ${nota.titulo}`);
            console.log(`Estado: ${nota.estado}`);
            console.log(`----------------------`);
        });
        fs.appendFileSync('./notas.json', JSON.stringify(arrayDeNotas, null, 4));
        break;
    case undefined:
        console.log('Ey tenes que completar despues app.js con algo');
        console.log('---------------------------------------------');
        console.log('Las posibilidades que tenes son:');
        console.log('1. listar');
        console.log('2. Una nota a crear');
    default:

        break;
}


// let nuevaNota = { 
//     titulo: "Una nueva nota", 
//     estado: "pendiente" 
// }

// switch (process.argv[2]) { 
//     case "Listar": 
//         console.log(arrayDeNotas); 
//         break; 
//     case "ListarFiltro": 
//         let arrayFiltered = arrayDeNotas.map(function eliminarDescripcion(unaNota) { 
//             let nuevaNota2 = { 
//                 titulo: unaNota.titulo, 
//                 estado: unaNota.estado 
//             }; 
//             return nuevaNota2; 
//         }); 
//         console.log(arrayFiltered);
//         break; 
//     default: 
//         console.log("caso default");
// }
    
    //arrayDeNotas.push(nuevaNota); 
    
    let nuevoJsonNotas = JSON.stringify(arrayDeNotas, null, 4); 
    fs.writeFileSync('./notas.json', nuevoJsonNotas); 