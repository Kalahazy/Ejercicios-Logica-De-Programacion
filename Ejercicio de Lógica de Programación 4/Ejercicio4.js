// Instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Encapsular la lógica del proceso para regresar a ella si el usuario ingresa un número no válido
function ValidateNumber() {
    readline.question('Ingrese un número entero positivo: ', (input) => {
        // Expresión regular para verificar si la entrada "input" es un número entero positivo
        const validNumber = /^[1-9]\d*$/.test(input);

        // Condiciones para números válidos e inválidos
        if (validNumber) {
            readline.close();  // Cerrar la interfaz de línea de comandos
            const number = parseInt(input);
            console.log(`Serie de Fibonacci de ${number} digitos`);
            let fibonacci = 0;
            let fibonacciAux1 = 1, fibonacciAux2;
            let fibonacciSeries = '';  // Cadena para almacenar la serie de Fibonacci

            for (var i = 0; i < number; i++) {
                fibonacciSeries += fibonacci;
                // Agregar como y espacio excepto al ultimo numero de la serie
                if (i < number - 1) {
                    fibonacciSeries += ', ';
                }
                fibonacciAux2 = fibonacci;
                fibonacci += fibonacciAux1;
                fibonacciAux1 = fibonacciAux2;
            }
            // Impresión de la serie de Fibonacci
            console.log(fibonacciSeries);
        } else {
            console.log(`"${input}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la función nuevamente para volver a solicitar la entrada
            ValidateNumber();
        }
    });
}

ValidateNumber(); // Iniciar el proceso