// function prueba( ) {
//     //Codigo que se realice cuando se llame a la función
//     console.log("Mi primera función");
//     //Para llamar una función necesito su nombre y paréntesis
// }

// prueba();
// function sumar(num1, num2){
//     const suma= +num1 + +num2;
//     console.log("Suma:", suma);
// }



// const numero1= +prompt("Ingrese num1");
// const numero2= +prompt("Ingrese num2");
// sumar (numero1,numero2);


// function sumar(numero1, numero2) {
//     const convertNumero1 = +numero1;
//     const convertNumero2 = +numero2;
//     const suma = convertNumero1 + convertNumero2;

// // isNan me permite saber si un número Nan

// if (isNaN(suma)){
//     console.log("No se puede sumar");
//     return;
//     //La función termina 

// }
// console.log("SUMA", suma);
// }
// console.log(typeof convertNumero1);
// console.log(typeof convertNumero2);




// function sumar(numero1, numero2) {
//     const suma= +numero1 + +numero2;
//     if (isNaN(suma)){
//         return "Error: no se puede sumar";
//     }
//     return suma;

// }





// console.log(sumar(50,80));
// console.log(sumar(90,20));
// console.log(sumar("hola",30));
// console.log(sumar("10",10));

// Operador ternario, es un if-else cuando sólo se quiere una línea
// la estructura de un operador ternario va con
//condicion ? true(ejecutas una línea), false :otra acción

// function sumar (numero1, numero2){
//     const suma = +numero1 + +numero2;

//     return isNaN(suma) ? "Error:Nose puede sumar": suma;
// }

//Función
// const sumar=(numero1,numero2)=>isNaN(+numero1 + +numero2) ? "Error" : +numero1 + +numero2; 

//Funcion d eexpresión:Tener una funcion dentro de una variable
//Conocida como función anónima

// const resta = function (numero1, numero2) {
//     const calcResta = +numero1 - +numero2;
//     return isNaN(calcResta) ? "Error:Nose puede restar" : calcResta;
// };
// console.log("Resta: ", resta(10, 20));

// //Ejemplo2:

// const multiplicacion = function (numero1, numero2) {
//     const calcMultiplicacion = +numero1 * +numero2;
//     return isNaN(calcMultiplicacion) ? "Error:no se puede multiplicar": calcMultiplicacion;

// };

//arrow function: funciones flecha
// es una función parecida a la funciom anonima o de expresión,
//sin embargo, no hace falta usar la palabra function
// una funcion flecha no puede usar "THIS"
//la diferencia entre una funcion y un arrow función
//Ejemplo: declaramos así

const division = (numero1, numero2) => {
    if (+numero2 == 0) {
        return "Error: No se puededividir entre 0";
    }
    const calcDivision = +numero1 / +numero2;
    return isNaN(calcDivision) ? "Error:no se puede dividir" : calcDivision;
};
console.log(division(10, "0"));
console.log("Division:", division(10, 2));

//Cuando recibe un sólo parámetro

const saludar = (nombre, apellido) => {
    // return "Hola" + nombre + "y mi apellido es " +apellido;
    //Comilla inversa permite 
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;

};
console.log(saludar("Juan", "SinMiedo"));

// Cuando un arrow funcion no recibe parametros
//podría usarse _ ó () en una función
const funcionSinParametros = _ => {
    return "Hola mundo";
};

// vamos a ver un arrow funcion inline, solo funcionan cuando
//quiero ejecutar una línea d ecódigo
//el return está implícito 

const hello = () => "Hola mundo inline";
// doble declaracion de variable
// const edad=10;
// const edad=20;
console.log(hello);

const calcularEsMayor = () => {
    const edad = 18;
    console.log(edad);
};

const mostrarEdad = () => {
    const edad = 18;
    console.log(edad);
};
//Recomendaciones: en verbo, e indiquen loo que hace la funcion
function sumar() { }
//Tratar de no pasar 3 parámetros
//Se pueden aceptar arrays
const alumnosTecsup = ["Juan", "Pedro"];
function listarAlumnos(alumnos) {
    console.log("Alumnos Tecsup", alumnos);
};
listarAlumnos(alumnosTecsup);

//sI VEN UN CÓDIGO REPETIDO, LLEVARLO A UNA FUNCIÓN
function validarSiEsNumero(numero) {
    return isNaN(numero) ? `Error:No se puede ${tipo} ` : numero;
}

function sumar(numero1, numero2) {

    const suma = +numero1 + +numero2;

    return validarSiEsNumero(suma, "sumar")
}

const restar= function(numero1, numero2) {

    const calcResta = +numero1 - +numero2;

    return validarSiEsNumero(calcResta, "restar")
}

const multiplicarr= function(numero1, numero2) {

    const calcMultiplicacion = +numero1 * +numero2;

    return validarSiEsNumero(calcMultiplicacion, "multiplicar")
}

const dividir = (numero1, numero2) => {
    if (+numero2 === 0) {
      // termina la ejeccion de la funcion y retorn ese string
      return "Error: no se puede dividir por 0";
    }
  
    const calcDivision = +numero1 / +numero2;
    return validarSiEsNumero(calcDivision, "dividir");
  };