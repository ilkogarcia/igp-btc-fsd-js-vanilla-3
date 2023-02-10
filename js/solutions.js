// Ejercicio 1: Determinar si dos números son múltiplos entre si
const isMultipleOf = () => {
    // get data
    let numA = parseInt(document.getElementById("ej1dato1").value);
    let numB = parseInt(document.getElementById("ej1dato2").value);
    // Comprobamos si alguno de los números es multiplo del otro
    let respuesta = (numA%numB == 0 || numB%numA == 0) ? "Si": "No";
    // Escribimos la respuesta
    document.getElementById("result1").innerHTML = `${respuesta} son multiplos!!!`;
    switch (respuesta) {
        case "No":
            document.getElementById("result1").classList.remove("result--ok")
            document.getElementById("result1").classList.add("result--bad")
        break;
        case "Si":
            document.getElementById("result1").classList.remove("result--bad")
            document.getElementById("result1").classList.add("result--ok")
        break;
    }
}

// Ejercio 2: Determinar el mayor de dos números
const whichIsGreater = () => {
    let numeroA = parseInt(document.getElementById("ej2dato1").value);
    let numeroB = parseInt(document.getElementById("ej2dato2").value);
    let respuesta;
    // Comprobar si son iguales y en caso contrario determinar el mayor de los dos números
    if (numeroA > numeroB) {
        respuesta = "El mayor de los dos números es: " + numeroA; 
    } else if (numeroB > numeroA) {
        respuesta = "El mayor de los dos números es: " + numeroB; 
    } else {
        respuesta = "Los dos números son iguales"
    }
    // Escribimos la respuesta
    document.getElementById("result2").innerHTML = respuesta;
}

// Ejercicio 3: Determinar si un número es negativo, positivo o cero
const howIsThisNumber = () => {
    let numero = parseInt(document.getElementById("ej3dato1").value);
    if (numero < 0) {
        document.getElementById("result3").innerHTML = "Se trata de un número negativo";
        document.getElementById("result3").classList.remove("result--ok")
        document.getElementById("result3").classList.add("result--bad")
    } else if (numero > 0) {
        document.getElementById("result3").innerHTML = "Se trata de un número positivo";
        document.getElementById("result3").classList.remove("result--bad")
        document.getElementById("result3").classList.add("result--ok")
    } else {
        document.getElementById("result3").innerHTML = "El número es 0";
        document.getElementById("result3").classList.remove("result--ok")
        document.getElementById("result3").classList.remove("result--bad")
    }
}

// Ejercicio 4: Determinar si una cadena de texto tiene cinco caracteres o más.
const howLongIs = () => {
    let texto = document.getElementById("ej4dato1").value;
    if (texto.length >= 5 ) {
        document.getElementById("result4").innerHTML = "El texto tiene una longitud MAYOR o igual a 5 carácteres.";
    } else {
        document.getElementById("result4").innerHTML = "El texto tiene una longitud MENOR de 5 carácteres.";
    }
}
// Calcular el promedio de tres números y determinar si el promedio es mayor que cinco.
const calcAverage = () => {
    let numero1 = parseInt(document.getElementById("ej5dato1").value);
    let numero2 = parseInt(document.getElementById("ej5dato2").value);
    let numero3 = parseInt(document.getElementById("ej5dato3").value);
    // Calculamos el primedio de 3 números
    let average = (numero1 + numero2 + numero3) / 3
    // Mostramos el resultado
    document.getElementById("result5").innerHTML = `El promedio de estos 3 números es ${average} y ${(average>5)? 'es' : 'no es'} mayor que 5.`;
}

// Comprobar si una cadena de texto esta toda en minúsculas
const isInLowerCase = () => {
    let texto = document.getElementById("ej6dato1").value;
    // Comparamos en una expresion ternaria el texto con el mismo comvertido todo a minusculas.
    (texto === texto.toLowerCase())
        ? document.getElementById("result6").innerHTML = "El texto introducido ha sido escrito completamente en minúsculas."
        : document.getElementById("result6").innerHTML = "El texto introducido usa minúsculas y mayúsculas.";
}

