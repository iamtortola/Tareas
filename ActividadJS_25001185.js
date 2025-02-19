function obtenerSignoZodiacal(mes, dia) {
    const signos = [
        { signo: "Aries", inicio: [3, 21], fin: [4, 19] },
        { signo: "Tauro", inicio: [4, 20], fin: [5, 20] },
        { signo: "Géminis", inicio: [5, 21], fin: [6, 20] },
        { signo: "Cáncer", inicio: [6, 21], fin: [7, 22] },
        { signo: "Leo", inicio: [7, 23], fin: [8, 22] },
        { signo: "Virgo", inicio: [8, 23], fin: [9, 22] },
        { signo: "Libra", inicio: [9, 23], fin: [10, 22] },
        { signo: "Escorpio", inicio: [10, 23], fin: [11, 21] },
        { signo: "Sagitario", inicio: [11, 22], fin: [12, 21] },
        { signo: "Capricornio", inicio: [12, 22], fin: [1, 19] },
        { signo: "Acuario", inicio: [1, 20], fin: [2, 18] },
        { signo: "Piscis", inicio: [2, 19], fin: [3, 20] }
    ];

    // Verificar en qué signo se encuentra la fecha
    for (let i = 0; i < signos.length; i++) {
        const { signo, inicio, fin } = signos[i];
        
        if ((mes > inicio[0] || (mes === inicio[0] && dia >= inicio[1])) && 
            (mes < fin[0] || (mes === fin[0] && dia <= fin[1]))) {
            return signo;
        }
    }
    return "Fecha inválida";
}

// Solicitar al usuario el mes y día de nacimiento
const mes = parseInt(prompt("Ingrese el mes de nacimiento (en número): "));
const dia = parseInt(prompt("Ingrese el día de nacimiento: "));

// Obtener y mostrar el signo zodiacal
const signo = obtenerSignoZodiacal(mes, dia);
alert(`Tu signo zodiacal es: ${signo}`);