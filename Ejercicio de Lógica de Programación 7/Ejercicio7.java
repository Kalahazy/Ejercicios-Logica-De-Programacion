import java.util.Scanner;

public class Ejercicio7 {
    public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String diaSemana = "";
		int horas = 0, minutos = 0, minutosHastaFinSemana = 0;

		// Solicitar al usuario un día de la semana
		do {
			System.out.print("Ingrese un día de la semana: ");
			// Convertir la entrada en minúsculas
			diaSemana = scan.nextLine().toLowerCase();
		} while (!diaSemana.matches("lunes|martes|miércoles|jueves|viernes|sábado|domingo"));

		if (!diaSemana.matches("sábado|domingo")) {
			// Solicitar al usuario una hora (horas y minutos)
			boolean entradaValida = false;
			while (!entradaValida) {
				System.out.print("Ingrese la hora (formato HH:MM): ");
				String hora = scan.nextLine();
				// Dividir la entrada en partes usando ':' como separador
				String[] partesHora = hora.split(":");
				// Verificar que haya dos partes (horas y minutos)
				if (partesHora.length == 2) {
					// Comprobar que las horas y minutos sean números
					if (partesHora[0].matches("\\d+") && partesHora[1].matches("\\d+")) {
						horas = Integer.parseInt(partesHora[0]);
						minutos = Integer.parseInt(partesHora[1]);
						// Verificar que las horas estén en el rango válido
						if ((horas >= 0 && horas <= 23) && (minutos >= 0 && minutos <= 59)) {
							entradaValida = true;
						} else {
							System.out.println("Hora no válida");
						}
					} else {
						System.out.println("Hora no válida");
					}
				} else {
					System.out.println("Hora no válida");
				}
			}
			scan.close();

			// Calcular cuántos minutos faltan para el fin de semana
			switch (diaSemana) {
			case "lunes":
				minutosHastaFinSemana = (((24 - horas) * 60) - minutos) + (3 * (24 * 60)) + (15 * 60);
				break;
			case "martes":
				minutosHastaFinSemana = (((24 - horas) * 60) - minutos) + (2 * (24 * 60)) + (15 * 60);
				break;
			case "miércoles":
				minutosHastaFinSemana = (((24 - horas) * 60) - minutos) + (24 * 60) + (15 * 60);
				break;
			case "jueves":
				minutosHastaFinSemana = (((24 - horas) * 60) - minutos) + (15 * 60);
				break;
			case "viernes":
				if (horas < 15) {
					minutosHastaFinSemana = (((15 - horas) * 60) - minutos);
				}
				break;
			}

			if (minutosHastaFinSemana > 0) {
				System.out.println("Faltan " + minutosHastaFinSemana + " minutos para el fin de semana");
			} else {
				System.out.println("¡Ya es fin de semana!");
			}
		} else {
			System.out.println("¡Ya es fin de semana!");
		}

	}
}
