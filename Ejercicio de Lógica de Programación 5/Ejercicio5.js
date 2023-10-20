// Instancia de readline para manejar la entrada y salida
const readline = require('readline').createInterface({
    input: process.stdin,  // Usar la entrada estándar (teclado)
    output: process.stdout  // Usar la salida estándar (consola)
});

// Generar un número secreto aleatorio entre 1 y 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
// Lista para almacenar los números introducidos por el usuario
const numbersIntroduced = [];
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(secretNumber);  // Mostrar el número secreto en consola, para realizar pruebas
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Encapsular la lógica del proceso para regresar a ella si el usuario ingresa un número no válido
function ValidateNumber() {
    readline.question('Ingresa un número del 1 al 100 para adivinar el número secreto: ', (input) => {
        // Expresión regular para verificar si la entrada "input" es un número entero positivo
        const validNumber = /^[1-9]\d*$/.test(input);

        // Condiciones para números válidos
        if (validNumber) {
            const number = parseInt(input);
            if (number >= 1 && number <= 100) {
                numbersIntroduced.push(number); // Agregar el número ingresado al final de la lista
                // Cuando el número ingresado es el número secreto
                if (number === secretNumber) {
                    readline.close();  // Cerrar la interfaz de línea de comandos
                    console.log("! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !");
                    console.log(`Felicidades, adivinaste el número secreto en ${numbersIntroduced.length} intento(s)`);
                    console.log("Números introducidos: ", numbersIntroduced)
                    console.log("! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !");
                } else {    // Cuando el número ingresado no es el número secreto
                    console.log(`Ups, el número secreto es incorrecto, vuelve a intentarlo.`);
                    // Llamamos a la función nuevamente para volver a solicitar la entrada
                    ValidateNumber();
                }
            } else {
                console.log(`"${input}" no es un número dentro del rango, por favor, ingrese un número válido.`);
                console.log("~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~   ~");
                // Llamamos a la función nuevamente para volver a solicitar la entrada
                ValidateNumber();
            }            
        } else {    // Condiciones para números inválidos
            console.log(`"${input}" no es un número válido, por favor, ingrese un número válido.`);
            console.log("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ");
            // Llamamos a la función nuevamente para volver a solicitar la entrada
            ValidateNumber();
        }
    });
}

ValidateNumber(); // Iniciar el proceso