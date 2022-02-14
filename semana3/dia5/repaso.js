const alumnos = ["Juana", "Erick", "Patricia", "Bruno", "Kjaris",
"Juana", "Erick", "Patricia", "Bruno", "Kjaris","Kjaris"];
console.log("Contar",alumnos.length);
alumnos[6]="Juanito";
const valores = [ true, 10.5 ,"Hola", 12, "3"]
console.log("2do valor", valores[1]);

function obtenerSegundoValor(valores) {
    //validar la posición
    if (valores[1]==undefined) {
        return "Error:Posición no encontrada";
    }

    return valores[1];
}



function obtenerValor(valores) {
    return valores[1]== undefined ? "Error, no posición" : valores[1];

}
    console.log(obtenerValor(valores));

    let nombre;
    console.log("nombre", nombre);



    // array vacios

    let carros = new Array();
    //esta forma e sla más adecuada
    let carrosNuevos =[];

    // funcion que llena un array

    const llenarCarrosNuevos = (nuevoValor) => {
        //Existe una funcion llamada push(parametro)
        // lo coloca al final del arreglo
        //push sólo funciona si la variable e sun arreglo
        carrosNuevos.push(nuevoValor);
    };

    llenarCarrosNuevos("Mercedes ");
    llenarCarrosNuevos("BMW");
    llenarCarrosNuevos("Tesla");
    llenarCarrosNuevos(["Carro1", "Carro2", "Carro3"]);

    console.log(carrosNuevos);



    // Una función q diga si un numero e spar o impar
     
   num = prompt("Ingrese un numero: ");  
    function numeroParImpar(numero) {
        
        return numero % 2 ==0 ? "Es par" : "Es impar";
        
    }

    console.log(numeroParImpar(num));
    
      