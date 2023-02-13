// Ejercicio 1
const listNumbers = () => {
    let numero = parseInt(document.getElementById("ej1dato1").value);
    let respuesta = "";
    for (let i= 0; i <= numero; i++) {
        respuesta += `${i}, `;
    }
    document.getElementById("result1").innerHTML =  respuesta.slice(0,-2);
}

// Ejercio 2
const count = () => {
    let N = parseInt(document.getElementById("ej2dato1").value);
    let M = parseInt(document.getElementById("ej2dato2").value);
    let suma = 0;
    let respuesta = "";
    let i = N;
    while (i <= M) {
        suma += N;
        respuesta += `${suma}, `;
        i += N;
    }
    document.getElementById("result2").innerHTML = respuesta.slice(0,-2); 
}

// Ejercicio 3
const pairNumbers = () => {
    let N = parseInt(document.getElementById("ej3dato1").value);
    let respuesta = "";
    for (let i = 1 ; i < N; i++) {
        ( i%2 == 0 ) ? (respuesta += `${i}, `) : null;
        }
    document.getElementById("result3").innerHTML = respuesta.slice(0,-2); 
}

// Ejercicio 4
const multiply = () => {
    let N = parseInt(document.getElementById("ej4dato1").value);
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `- ${N} x ${i} = ${N*i} <br>`
    }
    document.getElementById("result4").innerHTML = tabla; 
}

// Ejercicio 5
const draw = () => {
    let N = parseInt(document.getElementById("ej5dato1").value);
    let arbol = "";
    let rama = "";
    for (let a = 1; a <= N; a++) {
        rama = "";
        for (let b = 1; b <= a; b++) {
            rama += "*";
        }
        arbol += `${rama} <br>`;
    }
    document.getElementById("result5").innerHTML = arbol; 
}

// Ejercicio 6
const suma = () => {
    let N = parseInt(document.getElementById("ej6dato1").value);
    let suma = 0;
    for (let i = 0; i <= N; i++) {
        suma += i;
    }
    document.getElementById("result6").innerHTML = `La suma de todos los números enteros positivos entre 0 y ${N} es ${suma}`; 
}

// Ejercicio 7 
const average = () => {
    let N1 = parseInt(document.getElementById("ej7dato1").value);
    let N2 = parseInt(document.getElementById("ej7dato2").value);
    let N3 = parseInt(document.getElementById("ej7dato3").value);
    let N4 = parseInt(document.getElementById("ej7dato4").value);

    document.getElementById("result7").innerHTML = `La media aritmetica es ${(N1+N2+N3+N4)/4}`; 
}

// Ejercicio 8
const isPrimeNumber = () => {
    let N = parseInt(document.getElementById("ej8dato1").value);
    let respuesta = "";

    for (let a = 2; a <= N; a++) {
        let aIsPrime = true;
        if (a%2 == 0) {
            aIsPrime = false;
        } else if (a%3 == 0) {
            aIsPrime = false;
        }
        (a == 2) ? (respuesta += `${a}, `) : null; 
        (a == 3) ? (respuesta += `${a}, `) : null ;
        (aIsPrime) ? (respuesta += `${a}, `) : null;
    }

    document.getElementById("result8").innerHTML = respuesta.slice(0,-2); 
}

// Ejercicio 9
const cuentaHasta0 = () => {
    let N = parseInt(document.getElementById("ej9dato1").value);
    let respuesta9a = [];
    for (let i = 0; i <= N; i++) {
        respuesta9a.unshift(`${i} `);
    }
    document.getElementById("result9a").innerHTML = respuesta9a.toString(); 
}

const cuentaDeAaB = () => {
    let N1 = parseInt(document.getElementById("ej9dato2").value);
    let N2 = parseInt(document.getElementById("ej9dato3").value);
    let respuesta9b = [];
    for (let i = ( Math.min(N1, N2)); i <= (Math.max(N1, N2)); i++) {
        (N1 > N2) ? respuesta9b.unshift(`${i} `) : respuesta9b.push(`${i} `);
    }
    document.getElementById("result9b").innerHTML = respuesta9b.toString(); 
}

const cualEsMayor = () => {
    let N1 = parseInt(document.getElementById("ej9dato4").value);
    let N2 = parseInt(document.getElementById("ej9dato5").value);

    document.getElementById("result9c").innerHTML = Math.max(N1, N2); 
}

const cuentaDeMayorAMenor = () => {
    let N1 = parseInt(document.getElementById("ej9dato4").value);
    let N2 = parseInt(document.getElementById("ej9dato5").value);
    let respuesta9d = [];
    for (let i = Math.min(N1, N2); i <= Math.max(N1, N2); i++) {
        respuesta9d.unshift(`${i} `);
    }
    document.getElementById("result9d").innerHTML = respuesta9d.toString(); 
}


// Ejercicio 10

const createArray = () => {
    let N1 = parseInt(document.getElementById("ej10dato1").value);
    let N2 = parseInt(document.getElementById("ej10dato2").value);
    let N3 = parseInt(document.getElementById("ej10dato3").value);
    let N4 = parseInt(document.getElementById("ej10dato4").value);
    let N5 = parseInt(document.getElementById("ej10dato5").value);

    let arrayA = [N1, N2, N3, N4, N5];
    document.getElementById("result10a").innerHTML = arrayA.toString(); 
}

const createNewArray = () => {
    let N1 = parseInt(document.getElementById("ej10dato1").value);
    let N2 = parseInt(document.getElementById("ej10dato2").value);
    let N3 = parseInt(document.getElementById("ej10dato3").value);
    let N4 = parseInt(document.getElementById("ej10dato4").value);
    let N5 = parseInt(document.getElementById("ej10dato5").value);

    let arrayA = [N1, N2, N3, N4, N5];
    document.getElementById("result10a").innerHTML = arrayA.toString(); 

    let arrayB = [];
    arrayA.forEach(element => {
        arrayB.push(element*3);
    });

    document.getElementById("result10b").innerHTML = arrayB.toString();
}

