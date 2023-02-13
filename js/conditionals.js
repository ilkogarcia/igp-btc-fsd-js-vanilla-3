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

// Ejercicio 5: Calcular el promedio de tres números y determinar si el promedio es mayor que cinco.
const calcAverage = () => {
    let numero1 = parseInt(document.getElementById("ej5dato1").value);
    let numero2 = parseInt(document.getElementById("ej5dato2").value);
    let numero3 = parseInt(document.getElementById("ej5dato3").value);
    // Calculamos el primedio de 3 números
    let average = (numero1 + numero2 + numero3) / 3
    // Mostramos el resultado
    document.getElementById("result5").innerHTML = `El promedio de estos 3 números es ${average} y ${(average>5)? 'es' : 'no es'} mayor que 5.`;
}

// Ejercicio 6: Comprobar si una cadena de texto esta toda en minúsculas
const isInLowerCase = () => {
    let texto = document.getElementById("ej6dato1").value;
    // Comparamos en una expresion ternaria el texto con el mismo comvertido todo a minusculas.
    (texto === texto.toLowerCase())
        ? document.getElementById("result6").innerHTML = "El texto introducido ha sido escrito completamente en minúsculas."
        : document.getElementById("result6").innerHTML = "El texto introducido usa minúsculas y mayúsculas.";
}

// Ejercicio 7: a) Generar un número aleatorio entre el 1 y 20 
const randomNumber = () => {
    let randomInt = Math.floor (Math.random() * 20) + 1;
    document.getElementById("result7a").innerHTML = randomInt;
    document.getElementById("result7b").innerHTML = "";
    document.getElementById("button7a").disabled = true;
    document.getElementById("button7b").disabled = false;
}

// Ejercicio 7: b) Comprobar si es par o impar.
const isEvenOrOdd = () => {
    let number = document.getElementById("result7a").innerHTML;
    document.getElementById("result7b").innerHTML = `El número ${number} es ${(number%2 == 0) ? 'par' : 'impar'}`;
    document.getElementById("button7a").disabled = false;
    document.getElementById("button7b").disabled = true;
}

// Ejercicio 8: Califica las notas del alumno.
const rateTheStudent = () => {
    // Creamos un array con todas las notas
    let notas = [];
    notas.push(parseInt(document.getElementById("ej8dato1").value));
    notas.push(parseInt(document.getElementById("ej8dato2").value));
    notas.push(parseInt(document.getElementById("ej8dato3").value));

    // Sumamos todos los elementos del array (acumulado de notas)
    let acumulado = 0;
    notas.forEach ( nota  => acumulado += nota );

    // Calculamos el promedio
    let notamedia = (acumulado / notas.length);

    // Establece la calificación del alumno según su nota media.
    let calificacion;
    if (notamedia >= 0 && notamedia <= 4.9) {
        calificacion = "SUSPENSO";
    } else if (notamedia >= 5 && notamedia <= 6.9) {
        calificacion = "APROBADO";
    } else if (notamedia >= 7 && notamedia <= 8.9) {
        calificacion = "NOTABLE";
    } else if (notamedia >= 9 && notamedia <= 10) {
        calificacion = "SOBRESALIENTE";
    }

    // Mostramos los resutados al usuario;
    document.getElementById("result8").innerHTML = `El alumno ha optenido una calificación de ${calificacion} con una nota media de ${notamedia.toFixed(2)}`;
}

// Ejercicio 9: Programa para una tienda de coches
document.getElementById("marcas").addEventListener("change", () => {
    switch (document.getElementById("marcas").value) {
        case "BMW":
            document.getElementById("modelos").innerHTML = "<option value='ix4x4'>iX 4x4</option><option value='serie_1'>Serie 1</option>"
        break;
        case "Ford":
            document.getElementById("modelos").innerHTML = "<option value='Fiesta'>Fiesta</option><option value='Focus'>Focus</option>"
        break;
        case "Volkswagen":
            document.getElementById("modelos").innerHTML = "<option value='polo'>Polo</option><option value='t_cross'>T-Cross</option>"
        break;    
    }
})

let listaprecios = [
    {
        marca: "Ford",
        modelo: "Fiesta",
        descuento: 5
    },
    {
        marca: "Ford",
        modelo: "Focus",
        descuento: 10
    }
]

const calcDiscount = () => {
    // Obtiene el coche elegido por el usuario
    let marcaelegida = document.getElementById("marcas").value;
    let modeloelegido = document.getElementById("modelos").value;
    // Buscamos el coche elegido por el usuario en el listado de precios.
    let coche = listaprecios.find(e => e.modelo == modeloelegido);
    // Mostramos el descuento al usuario;
    document.getElementById("result9").innerHTML = `El descuento para el coche de marca: ${marcaelegida} y modelo ${modeloelegido} es ${coche.descuento}%`;
}

// Ejercicio 10: Cuántos días tiene el mes de XXXX?

let mesescon30dias = [4, 6, 9, 11];
let mesescon31dias = [1, 3, 5, 7, 8, 10, 12];
let mesescon28dias = [2];

const howManyDays = () => {
    // get data
    let mes = parseInt(document.getElementById("ej10dato1").value);
    // Comprobamos primero si es un mes de 31 días, luego si es un mes de 30 y finalmente si es un mes de 28 días.
    if (mesescon31dias.includes(mes)) {
        document.getElementById("result10").innerHTML = `El mes ${mes} tiene 31 días.`;
    } else if (mesescon30dias.includes(mes)) {
        document.getElementById("result10").innerHTML = `El mes ${mes} tiene 30 días.`;
    } else {
        document.getElementById("result10").innerHTML = `El mes ${mes} tiene 28 días (o 29 si el año es bisiestos).`;
    }
}


// Ejercicio 11: Para que tipo de coche es esta rueda
const analyzeTire = () => {
    let diametro = parseFloat(document.getElementById("ej11dato1").value);
    let grosor = parseFloat(document.getElementById("ej11dato2").value);
    let msjRespuesta = ""; 

    if (diametro > 1.4) {
        msjRespuesta = "Esta rueda es para un vehículo grande";
        if (grosor < 0.4) {
            msjRespuesta = msjRespuesta + ", pero el grosor de la rueda es inferior al recomendado.";
        }
    } else if (diametro > 0.8 && diametro <= 1.4) {
        msjRespuesta = "Esta rueda es para un vehículo mediano";
        if (grosor < 0.25) {
            msjRespuesta = msjRespuesta + ", pero el grosor de la rueda es inferior al recomendado.";
        }
    } else {
        msjRespuesta = "La rueda es para un vehículo pequeño";
    }
    document.getElementById("result11").innerHTML = msjRespuesta;
}

// Ejercicio 12: Calcula el precio total
const totalPrice = () => {

    let precioKm = 0; 
    switch (document.getElementById("ej12dato1").value) {
        case "coche":
            precioKm = 0.10;
            break;
        case "moto":
            precioKm = 0.20;
            break;
        case "autobus":
            precioKm = 0.5;
            break;
    }

    let km = parseFloat(document.getElementById("ej12dato2").value);    
    document.getElementById("result12").innerHTML = `El total a pagar es ${km * precioKm}`;
}

