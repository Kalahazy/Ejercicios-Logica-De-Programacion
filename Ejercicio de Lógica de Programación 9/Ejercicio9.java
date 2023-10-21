import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio9 {
	
	public static void main(String[] args) {
        Map<String, String> diccionario = new HashMap<>();
        // Diccionario
        diccionario.put("teléfono", "phone");
        diccionario.put("computadora", "computer");
        diccionario.put("teclado", "keyboard");
        diccionario.put("mouse", "mouse");
        diccionario.put("monitor", "monitor");
        diccionario.put("pantalla", "screen");
        diccionario.put("bocina", "speaker");
        diccionario.put("audífonos", "headphones");
        diccionario.put("micrófono", "microphone");
        diccionario.put("laptop", "laptop");
        diccionario.put("memoria", "memory");
        diccionario.put("disco duro", "hard drive");
        diccionario.put("procesador", "processor");
        diccionario.put("videojuego", "videogame");
        diccionario.put("consola", "console");
        diccionario.put("control", "controller");
        diccionario.put("juego", "game");
        diccionario.put("jugador", "player");
        diccionario.put("gráficos", "graphics");
        diccionario.put("sonido", "sound");
        diccionario.put("música", "music");
        diccionario.put("personaje", "character");
        diccionario.put("arma", "weapon");
        diccionario.put("nivel", "level");
        diccionario.put("mundo", "world");
        diccionario.put("jefe", "boss");
        diccionario.put("enemigo", "enemy");
        diccionario.put("vida", "life");
        diccionario.put("salud", "health");
        diccionario.put("energía", "energy");
        diccionario.put("poder", "power");
        diccionario.put("velocidad", "speed");

        Scanner scan = new Scanner(System.in);
        
        // Buscar la traducción en el diccionario
        do {
            System.out.print("Ingrese una palabra en español: ");
            String palabraEsp = scan.nextLine();

            if (diccionario.containsKey(palabraEsp)) {
                System.out.println( "La traducción al inglés es: " + diccionario.get(palabraEsp) );
                break;  // Salir del ciclo
            } else {
                System.out.println("La palabra no se encuentra en el diccionario, intente con alguna de la siguiente lista:");
                // Imprimir las palabras que hay en el diccionario
                for (String word : diccionario.keySet()) {
                    System.out.println(word);
                }
                System.out.println("~ ~ ~ ~ ~ ~ ~ ~ ~");
            }
        } while (true);
        scan.close();
    }
	
}
