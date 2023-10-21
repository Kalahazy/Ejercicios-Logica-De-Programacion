import java.util.Scanner;

public class Ejercicio8 {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int[] numeros = new int[10];
        int[] numerosOrdenados = new int[10];

        int contPrimos = 0;
        int contNoPrimos = 9;

        System.out.println("Ingrese 10 números:");

        for (int i = 0; i < 10; i++) {
            numeros[i] = scan.nextInt();
            if (esPrimo(numeros[i])) {
                numerosOrdenados[contPrimos] = numeros[i];
                contPrimos++;
            } else {
                numerosOrdenados[contNoPrimos] = numeros[i];
                contNoPrimos--;
            }
        }
        scan.close();

        System.out.println("Array original:");
        mostrarArray(numeros, 0);
        System.out.println("Array ordenado con números primos al principio::");
        mostrarArray(numerosOrdenados, contPrimos);

    }

    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void mostrarArray(int[] array, int cont) {
        for (int i = 0; i < array.length; i++) {
            if (i < cont) {
                System.out.println("pos[" + i + "] = " + array[i] + " (P)");
            } else {
                System.out.println("pos[" + i + "] = " + array[i]);
            }

        }
    }

}
