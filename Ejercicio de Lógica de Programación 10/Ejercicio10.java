import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio10 {

    public static void main(String[] args) {
        // Diccionario
        Map<String, String> diccionario = new HashMap<>();
        diccionario.put("fútbol", "soccer");
        diccionario.put("baloncesto", "basketball");
        diccionario.put("béisbol", "baseball");
        diccionario.put("natación", "swimming");
        diccionario.put("ciclismo", "cycling");
        diccionario.put("boxeo", "boxing");
        diccionario.put("lucha libre", "wrestling");
        diccionario.put("surf", "surfing");
        diccionario.put("ajedrez", "chess");
        diccionario.put("esquí", "skiing");
        diccionario.put("coche", "car");
        diccionario.put("camión", "truck");
        diccionario.put("motocicleta", "motorcycle");
        diccionario.put("bicicleta", "bicycle");
        diccionario.put("motor", "engine");
        diccionario.put("rueda", "wheel");
        diccionario.put("neumático", "tire");
        diccionario.put("freno", "brake");
        diccionario.put("acelerador", "accelerator");
        diccionario.put("luces", "lights");
        diccionario.put("parabrisas", "windshield");
        diccionario.put("asiento", "seat");
        diccionario.put("claxon", "horn");
        diccionario.put("gasolina", "gasoline");
        diccionario.put("diésel", "diesel");
        diccionario.put("transmisión", "transmission");
        diccionario.put("hamburguesa", "hamburger");
        diccionario.put("ensalada", "salad");
        diccionario.put("pollo asado", "grilled chicken");
        diccionario.put("pescado frito", "fried fish");
        diccionario.put("sopa de tomate", "tomato soup");
        diccionario.put("chocolate caliente", "hot chocolate");
        diccionario.put("tarta de manzana", "apple pie");
        diccionario.put("sándwich de pollo", "chicken sandwich");
        diccionario.put("helado de vainilla", "vanilla ice cream");
        diccionario.put("albóndigas", "meatballs");
        diccionario.put("ensalada de frutas", "fruit salad");
        diccionario.put("lasaña", "lasagna");
        diccionario.put("pastel de chocolate", "chocolate cake");
        diccionario.put("galletas", "cookies");
        diccionario.put("pan", "bread");
        diccionario.put("arroz", "rice");
        diccionario.put("frijoles", "beans");
        diccionario.put("leche", "milk");
        diccionario.put("huevos", "eggs");
        diccionario.put("queso", "cheese");
        diccionario.put("yogur", "yogurt");
        diccionario.put("manzana", "apple");
        diccionario.put("plátano", "banana");
        diccionario.put("naranja", "orange");

        // Crear una lista de las palabras disponibles
        List<String> palabrasDisponibles = new ArrayList<>(diccionario.keySet());
        // Crear una lista de las palabras seleccionadas
        List<String> palabrasSelecc = new ArrayList<>();
        int numPalabras = 5;
        Random rand = new Random();

        // Seleccionar 5 palabras al azar del diccionario sin que se repitan
        for (int i = 0; i < numPalabras; i++) {
            int id = rand.nextInt(palabrasDisponibles.size());  // Generar un número aleatorio dentro del rango de palabras disponibles
            String palabraEsp = palabrasDisponibles.get(id);    // Obtener la palabra en español en la posición del número aleatorio
            palabrasSelecc.add(palabraEsp);                    // Agregar la palabra aleatoria en español a la lista de palabras seleccionadas
            palabrasDisponibles.remove(id);                   // Eliminar la palabra aleatoria de la lista de palabras disponibles para evitar que se repita
        }

        Scanner scan = new Scanner(System.in);
        int respuestasOk = 0;
        int respuestasNOk = 0;

        // Solicitar las traducciones al usuario
        for (int i = 0; i < numPalabras; i++) {
            System.out.print("Traduzca '" + palabrasSelecc.get(i) + "' al inglés: ");
            String respuestaUsuario = scan.nextLine();
            String traduccionCorrecta = diccionario.get( palabrasSelecc.get(i) ); // Obtener la traducción de la palabra seleccionada dentro del diccionario

            // Comparar las palabras sin importar mayúsculas y minúsculas
            if (respuestaUsuario.equalsIgnoreCase(traduccionCorrecta)) {
                System.out.println("¡Correcto!");
                respuestasOk++;
            } else {
                System.out.println("Incorrecto. La respuesta correcta es: '" + traduccionCorrecta + "'");
                respuestasNOk++;
            }
        }
        scan.close();

        System.out.println("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~");
        // Resultados
        System.out.println("Respuestas correctas: " + respuestasOk);
        System.out.println("Respuestas incorrectas: " + respuestasNOk);
    }

}
