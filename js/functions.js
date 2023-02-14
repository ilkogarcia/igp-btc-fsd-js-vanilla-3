// Ejercicio 1
const convertToFahrenheit = () => {
    let gradosCelsius = parseInt(document.getElementById("ej1dato1").value);
    document.getElementById("result1").innerHTML = `<sup>o</sup>F: ${(gradosCelsius * 9) / 5 + 32}`; // Formula: (0 °C × 9 / 5) + 32 = 32 °F
}

// Ejercio 2
const isEvenOrOdd = () => {
    let numero = parseInt(document.getElementById("ej2dato1").value);
    document.getElementById("result2").innerHTML = `El número ${numero} es ${(numero%2 == 0) ? 'par' : 'impar'} `;
}

// Ejercicio 3
const isPrime = () => {
    let numero = parseInt(document.getElementById("ej3dato1").value);
    let isPrime = true;
    if (numero === 1) {
        document.getElementById("result3").innerHTML = "1 no se considera un número primo y tampoco es compuesto"; 
    } else if (numero > 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                isPrime = false;
                break;
            }
        }
        document.getElementById("result3").innerHTML = `El número ${numero} es un número ${(isPrime) ? 'primo' : 'compuesto'}`;
    } else {
        document.getElementById("result3").innerHTML = `El número ${numero} no es un número primo`;
    }
}

// Ejercicio 4
const getDNIletter = () => {
    let letra = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    let dni = document.getElementById("ej4dato1").value;
    let ExpRegSoloNumeros = "^[0-9]{8,8}$";

    if (dni.match(ExpRegSoloNumeros) == null) {
        document.getElementById("result4").innerHTML = `"${dni.toUpperCase()}" no es un número de DNI correcto`;
    } else {
        document.getElementById("result4").innerHTML = `${dni} + ${letra[dni%23]}`;
    }
}

// Ejercicio 5
const calculaImporte = () => {
    let precio = parseInt(document.getElementById("ej5dato1").value);
    let iva = 21;
    if (document.getElementById("ej5dato2").value != "") {
        iva = parseInt(document.getElementById("ej5dato2").value);
    } 
    document.getElementById("result5").innerHTML = `El precio con iva es ${precio + (precio * iva)/100}`;
}

// Ejercicio 6
const esVocal = () => {
    let vocales = ["A","E", "I", "O", "U"];
    let letra = document.getElementById("ej6dato1").value;
    let ExpRegSolo1Letra = "^[a-zA-Z]{1,1}$";
    if (letra.match(ExpRegSolo1Letra) == null) {
        document.getElementById("result6").innerHTML = `Solo está permitido introducir 1 letra`;
    } else {
        document.getElementById("result6").innerHTML = `Esta letra es una ${(vocales.includes(letra.toUpperCase())) ? 'vocal' : 'consonante'}`;
    }
}

// Ejercicio 7 
const encrypt = () => {
    let str = Array.from(document.getElementById("ej7dato1").value);
    let strCoded = "";

    str.forEach ( letra => {
        switch (letra.toUpperCase()) {
            case "A":
                strCoded += "4";
                break;
            case "E":
                strCoded += "3";
                break;
            case "I":
                strCoded += "1";
                break;
            case "0":
                strCoded += "0";
                break;
            default:
                strCoded += letra;
                break;
        }}
    );

    document.getElementById("result7").innerHTML = strCoded;
}

// Ejercicio 8
const countLetter = () => {
    // Capturamos la cadena de texto
    let frase = Array.from(document.getElementById("ej8dato1").value);
    let letra = document.getElementById("ej8dato2").value;

    let count = 0;
    frase.forEach (e => {
        (e.toUpperCase() == letra.toUpperCase()) ? count++ : null;
    });

    document.getElementById("result8").innerHTML = count;
}

// Ejercicio 9
const maxAray = () => {
    // Capturamos la cadena de texto
    let str = document.getElementById("ej9dato1").value;
    // Eliminamos los espacios usando una expresión regular
    numbersString = str.replace(/\s+/g, '');   // \s para "whitespace", g "global" flag, meaning match ALL \s (whitespaces).
    // Extraemos los elementos de la cadena y los pasamos a un array eliminando los separadores
    let numbersArray = numbersString.split(",");
    // Inicializamos la variable de suma

    document.getElementById("result9").innerHTML = `${Math.max(...numbersArray)}`;
}


// Ejercicio 10
const sumaArray = () => {
    // Capturamos la cadena de texto
    let str = document.getElementById("ej10dato1").value;
    // Eliminamos los espacios usando una expresión regular
    numbersString = str.replace(/\s+/g, '');   // \s para "whitespace", g "global" flag, meaning match ALL \s (whitespaces).
    // Extraemos los elementos de la cadena y los pasamos a un array eliminando los separadores
    let numbersArray = numbersString.split(",");
    // Inicializamos la variable de suma
    let sumatoria = 0;

    numbersArray.forEach( num => 
        sumatoria += parseFloat(num)
    );

    document.getElementById("result10").innerHTML = sumatoria;
}

// Ejercicio 11
const percentage = () => {
    let A = parseFloat(document.getElementById("ej11dato1").value);
    let B = parseFloat(document.getElementById("ej11dato2").value);

    let resultado = (A * B/100);
    document.getElementById("result11").innerHTML = `El ${B}% de ${A} es ${resultado.toFixed(2)}`;
}
