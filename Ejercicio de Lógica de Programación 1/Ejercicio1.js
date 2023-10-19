// Importar el módulo 'readline' de Node.js para interactuar con la línea de comandos
// Crear una instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Solicitar tres números al usuario
readline.question('Ingrese el primer número: ', (num1) => {
    readline.question('Ingrese el segundo número: ', (num2) => {
        readline.question('Ingrese el tercer número: ', (num3) => {
            readline.close();   // Cerrar la interfaz de línea de comandos
            const listNumbers = [parseFloat(num1), parseFloat(num2), parseFloat(num3)];

            // Verificar si los valores ingresados son números válidos
            if (!isNaN(listNumbers[0]) && !isNaN(listNumbers[1]) && !isNaN(listNumbers[2])) {
                console.log('Menor a mayor:', listNumbers.sort((a, b) => a - b));
                console.log('Mayor a menor:', listNumbers.sort((a, b) => b - a));

                // Verificar si los números son iguales y mostrar un mensaje
                if (listNumbers[0] === listNumbers[1] && listNumbers[1] === listNumbers[2]) {
                    console.log('Los números ingresados son iguales.');
                }
            } else {
                console.log(listNumbers);
                console.log('Por favor, ingrese números válidos.');
            }
        });
    });
});
