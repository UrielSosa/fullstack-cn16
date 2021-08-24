/* Retoma de conceptos */
// Ciclo for
let numeros = [1,2,1,4,8,5,5,6,6,7,10];
let numerosPares = [];
for (let i = 0; i < numeros.length; i++) {
    // console.log(`Soy ${i} menor que 10`);
    // console.log('Soy ' + i + ' menor que 10');
    if ((numeros[i]%2) === 0) {
        numerosPares.push(numeros[i])
    }
    //break;
}

/* condicionales (If ternario, Switch) */
// let nombre = 'Juan';
// let dia = 'Jueves';
// let esVerdad = nombre ? 'Verdadero': 'Falso';
// let esFalso = nombre ?? null;
// switch (dia) {
//     case 'Lunes':
//     case 'Jueves':
//         console.log('Tenemos clases');
//         break;
//     default:
//         console.log('No tenemos clases');
// }


// Objetos literales
// let objeto = {
//     propiedad: 'Valor',
//     metodos: function () {
//         console.log();
//     }
// }

/*let persona = {
    nombre: 'Uriel',
    programar: function () {
        return 'Estoy programando';
    }
}*/
//let personas = [{nombre: 'Leo', numero: 0}, {nombre: 'Agus'}]

// Arrow Function

// let deportista = {
    // 	energia: 100,
    //     experiencia: 10,
    //     nombre: "Aimar",
    //     entrenarHoras: (horas) => {
        //         deportista.energia = deportista.energia - horas * 5;
        //         deportista.experiencia = deportista.experiencia + horas * 2;
    //     }
    // }
    
// function saludar (nombre) {
//     return 'Hola ' + nombre;
// }

// const saludar = nombre => 'Hola ' + nombre;

// JSON



