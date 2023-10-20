// Importar libreria Scanner para solicitar entrada desde la consola
import java.util.Scanner;

public class Ejercicio6 {
	
	public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // Solicitar al usuario que ingrese una palabra o frase
        System.out.print("Ingrese una palabra o frase: ");
        String texto = scan.nextLine();
        scan.close();

        // Crear un objeto StringBuilder para manipular el texto
        StringBuilder stringBuilderTexto = new StringBuilder(texto);
        // Llamar a la función reverse() para invertir el texto contenido en el objeto StringBuilder y toString() para convertirlo en cadena de caractéres
        String textoInvertido = stringBuilderTexto.reverse().toString();

        System.out.println("Texto invertido: " + textoInvertido);
    }
	
}
