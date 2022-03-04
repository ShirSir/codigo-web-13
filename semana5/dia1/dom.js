/**
 * * Existe dentro de JS el document, este atributo de JS me va a permitir
 * * obtener los elementos de HTML
 */

/**
 * * Obteniendo elementos en base a su tag
 * * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form> tagname = form
 */

// ? como tengo 4 elementos con el tagname input esto sera un array de inputs
const inputs = document.getElementsByTagName("input");
//! Recordemos que input es un HTMLCollection, pero para poder ser iterado debe ser convertido aun array
//! normal vamos a usar Array.from para convertir este HTMLColletion a un array normal
const newInputs = Array.from(inputs);
console.log("inputs", inputs);
console.log("newinputs", newInputs);
// un map a inputs
newInputs.map((newInput) => {
    console.log("newInput", newInput);
});

const form = document.getElementsByTagName("form");

// accedan al boton
const button = document.getElementsByTagName("button");

const divContent = document.getElementsByTagName("div");
console.log("DivContent", divContent);
const newDivContent = Array.from(divContent);
console.log(newDivContent);
newDivContent.forEach((element) => {
    // aca solo quiero que imprima algo en consola
    console.log(element);
});

/**
 * Acceder a los elementos del DOM, es usando el ID
 * Recuerden qe podemos asignar id
 * esta será asignada para mi email
 */
const inputEmail = document.getElementById("input_email");
console.log(inputEmail.value);
console.log(inputEmail);

//Puedo acceder directamente a las propiedades del input
const inputPassword = document.getElementById("input_password");
console.log(inputPassword.value);
inputPassword.style.backgroundColor = "black";
inputEmail.style.backgroundColor = "red";
inputPassword.style.color = "pink";
//  Obteniendo documentos por su clase className

const inputName = document.getElementsByClassName("input_name");
console.log(inputName);
//convertir a un array
const newInputsName = Array.from(inputName);
newInputsName.forEach((input) => {
    console.log(input.value);
});

const buttons = document.getElementsByClassName("btn_registro");

console.log(button);