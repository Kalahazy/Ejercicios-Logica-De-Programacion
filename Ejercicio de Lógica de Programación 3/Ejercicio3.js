// Instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Encapsular la lógica del proceso para regresar a ella si el usuario ingresa un número no válido
function ValidateNumber() {
    readline.question('Ingrese un número entero positivo: ', (input) => {
        // Expresión regular para verificar si la entrada "input" es un número entero positivo
        const validNumber = /^[0-9]\d*$/.test(input);

        // Condiciones para números válidos e inválidos
        if (validNumber) {
            readline.close();  // Cerrar la interfaz de línea de comandos
            const number = parseInt(input);

            let factorial = 1;  // Declarar factorial como let para poder modificar su valor
            // Calcular el factorial del número ingresado
            for (var i = 1; i <= number; i++) {
                factorial *= i;
            }
            console.log(`!${number} = ${factorial}`);
        } else {
            console.log(`"${input}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la función nuevamente para volver a solicitar la entrada
            ValidateNumber();
        }
    });
}

ValidateNumber(); // Iniciar el proceso