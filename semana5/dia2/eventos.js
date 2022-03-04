//
function imprimir() {
    console.log("Hola mundo desde una function");
  }
 // Funcion que reciba un parametro
 //que indique si es +,-,*, /
 // en base al parámetro llame a la funcion 
 //que necesite del archivo operaciones

  function calculadorHTML(operacion) {
      console.log("operacion", operacion)
  

//1 oBTENER VALOR DE LOS INPUTS
const numero1= document.querySelector("#numero1").value;
const numero2= document.querySelector("#numero2").value;
// validamos q los datos no estén vacíos

if ( numero1== "" || numero2==""){
    alert("Debes completar los campos");
    return;
}
//Si ya esá validado, debemos hallar la operacion
// necesitamos una variable que guarde el resulado

let resultado=0;
if(operacion == "+"){
    resultado=sumar(numero1, numero2);
}

if (operacion=="-"){
    resultado=restar(numero1, numero2);
}

if (operacion=="*"){
    resultado=multiplicar(numero1, numero2);
}

if (operacion=="/"){
    resultado=dividir(numero1, numero2);
}

//mostrar resultado en html
const p= document.createElement("p");
const value = document.createTextNode(resultado);
p.appendChild(value);
const contenedor= document.querySelector("#resultado");
contenedor.appendChild(p);

  }



//   function sumar() {
//     const numero1 = document.querySelector("#numero1").value;
//     const numero2 = document.querySelector("#numero2").value;
  
//     console.log(numero1);
//     console.log(numero2);
//     //contenedor para imprimir mi resultado
//     const contenedor = document.querySelector("#resultado");
  
//     // validar si es que los inputs estan vacios
//     if (numero1 === "" || numero2 === "") {
//       alert("Debe completar los numeros para continuar");
//       //  cuando los datos esten vacio yo debo detener la ejecucion de mi funcion
//       return;
//     }
//     // estamos haciendo la operacion para poder
//     // calcumar la suma de los inputs
//     const suma = +numero1 + +numero2;
//       // como creo una etique p en js?
//     const p = document.createElement("p"); //* <p></p>
//     // como puede asignar un valor a la etiqueta creada?
//     const pValor = document.createTextNode(suma);
//     // como agrego el pValor al p?
//     p.appendChild(pValor);
//     contenedor.appendChild(p);
//   }