// Instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Solicitar tres números al usuario encapsulando la lógica del proceso del ingreso de cada número para regresar al principio si el usuario ingresa un número no válido

function ValidateNumberOne() {
    readline.question( 'Ingrese el primer número: ', (num1) => {
        // Expresión regular para verificar si la entrada "num1" es un número válido
        if ( /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(num1) ) {
            ValidateNumberTwo(num1);
        } else {
            console.log(`"${num1}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la primer función para volver a solicitar la entrada
            ValidateNumberOne();
        }
    });
}

function ValidateNumberTwo(num1) {
    readline.question( 'Ingrese el segundo número: ', (num2) => {
        // Expresión regular para verificar si la entrada "num1" es un número válido
        if ( /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(num2) ) {
            ValidateNumberThree(num1, num2);
        } else {
            console.log(`"${num2}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la primer función para volver a solicitar la entrada
            ValidateNumberOne();
        }
    });
}

function ValidateNumberThree(num1, num2) {
    readline.question( 'Ingrese el segundo número: ', (num3) => {
        // Expresión regular para verificar si la entrada "num1" es un número válido
        if ( /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(num3) ) {
            readline.close();   // Cerrar la interfaz de línea de comandos
            const listNumbers = [parseFloat(num1), parseFloat(num2), parseFloat(num3)];
            // Verificar si los números son iguales y mostrar un mensaje
            if (listNumbers[0] === listNumbers[1] && listNumbers[1] === listNumbers[2]) {
                console.log('Los números ingresados son iguales.');
            } else {
                console.log('Menor a mayor:', listNumbers.sort((a, b) => a - b));
                console.log('Mayor a menor:', listNumbers.sort((a, b) => b - a));
            }
        } else {
            console.log(`"${num3}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la primer función para volver a solicitar la entrada
            ValidateNumberOne();
        }
    });
}

ValidateNumberOne(); // Iniciar el proceso