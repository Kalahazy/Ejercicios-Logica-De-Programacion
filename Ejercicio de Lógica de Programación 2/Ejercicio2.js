// Instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Encapsular la lógica del proceso para regresar a ella si el usuario ingresa un número no válido
function ValidateNumber() {
    readline.question( 'Ingrese la temperatura en grados Celcius: ', (temp) => {
        // Expresión regular para verificar si la entrada "temp" es un número válido
        const validNumber = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/.test(temp);

        // Condiciones para números válidos e inválidos
        if (validNumber) {
            readline.close();  // Cerrar la interfaz de línea de comandos
            // Conversión de String a Float
            const tempCelcius = parseFloat(temp);
            // Conversión de Celcius a Farenheit
            const tempFarenheit = (tempCelcius * 9/5) + 32;
            // Conversión de Celcius a Kelvin
            const tempKelvin = tempCelcius + 273.15;
            console.log('La Temperatura en grados Farenheit es: ', tempFarenheit);
            console.log('La Temperatura en grados Kelvin es: ', tempKelvin);
        } else {
            console.log(`"${temp}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la función nuevamente para volver a solicitar la entrada
            ValidateNumber();
        }
    });
}

ValidateNumber(); // Iniciar el proceso