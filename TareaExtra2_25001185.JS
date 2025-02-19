// Función para generar un número aleatorio entre 1 y 9
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 9) + 1; // Genera un número entre 1 y 9
}

// Función para pedir un número válido entre 3 y 6
function pedirNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    } while (numero < 3 || numero > 6);
    return numero;
}

// Función para jugar
function jugar() {
    // Generar un número aleatorio para la computadora
    const numeroComputadora = generarNumeroAleatorio();

    // Pedir al usuario que ingrese un número entre 3 y 6
    const numeroUsuario = pedirNumero();

    // Pedir al usuario que adivine la relación (mayor, menor o igual)
    const adivinanza = prompt("¿Es el número que elegí mayor, menor o igual al número que elegiste? (Escribe 'mayor', 'menor' o 'igual')").toLowerCase();

    // Comparar los números y determinar si la adivinanza es correcta
    let resultado = "";
    if (adivinanza === "mayor" && numeroUsuario > numeroComputadora) {
        resultado = "¡Ha adivinado! El número de la computadora es menor.";
    } else if (adivinanza === "menor" && numeroUsuario < numeroComputadora) {
        resultado = "¡Ha adivinado! El número de la computadora es mayor.";
    } else if (adivinanza === "igual" && numeroUsuario === numeroComputadora) {
        resultado = "¡Ha adivinado! El número de la computadora es igual.";
    } else {
        resultado = "No ha adivinado. ¡Intente otra vez!";
    }

    // Mostrar el resultado
    alert(`La computadora eligió el número ${numeroComputadora}. Usted eligió el número ${numeroUsuario}. ${resultado}`);

    // Preguntar si el usuario quiere jugar otra vez
    const jugarDeNuevo = prompt("¿Quiere jugar otra vez? (SI/NO)").toLowerCase();

    if (jugarDeNuevo === "si") {
        jugar(); // Reiniciar el juego
    } else {
        alert("Gracias por jugar. ¡Hasta la próxima!");
        // Mostrar un mensaje con el nombre y número de carnet
        alert("Nombre: [Daniel Tortola]\nCarnet: [25001185]");
    }
}

// Iniciar el juego
jugar();