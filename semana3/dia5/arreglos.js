
const alumnos = ["Juana", "Erick", "Patricia", "Bruno", "Kjaris"];
console.log("alumnos" , alumnos);
const variosTipo = [100, "Juana", true, 100.5];
const productos =["Table", "Laptop"];
console.log(alumnos[2]);
console.log(alumnos[4]);
alumnos[0]="Pepe";
console.log("alumno reasignado", alumnos);
alumnos[5]="Juan";
console.log("Nuevo alumno", alumnos);
alumnos[6]="Imanol";
console.log("índices vacíos", alumnos);
console.log("cantidad de elementos", alumnos.length);

//Agregar un elemento en la última posición
alumnos[alumnos.length]= "Juan";
//Obtener el último elemento
console.log("ultimo elemento", alumnos[alumnos.length-1]);
