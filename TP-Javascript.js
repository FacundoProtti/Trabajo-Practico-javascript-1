// 1. Ingresar dos valores y sumarlos
let a = 5;
let b = 10;
console.log("suma:", a + b);
// 2. Ingresar tres valores e indicar cuál es el mayor y cuál el menor
let c = 1;
let d = 2;
let e = 3;
let mayor = Math.max(c,d,e)
let menor = Math.min(c,d,e)
console.log(`Mayor: ${mayor}, Menor: ${menor}`);
// 3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras
let palabra = "javascript"
console.log(`${palabra} tiene ${palabra.length} letras.`)
// 4. Ingresar un número e indicar si es par
let numero = 10;
console.log(`${numero} es ${numero % 2 === 0 ? "par" : "impar"}`);
// 5. Ingresar una palabra y un numero "n". Repetir la palabra "n" veces
let palabra2 = "hola";
let f = 3;
console.log(palabra2.repeat(f));
// 6. Ingresar dos valores enteros y enumerar los elementos que los separan
let val1 = 2
let val2 = 6;
let rango = [];
if (val1 < val2) {
    for (let i = val1 + 1; i < val2; i++) rango.push(i);
} else {
    for (let i = val1 - 1; i > val2; i--) rango.push(i);
}
console.log(`Elementos entre ${val1} y ${val2}: ${rango.join(", ")}`);
// 7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos
let inicio = 5
let fin = 20;
let multiplos3 = [];
for (let i = inicio + 1; i < fin; i++) {
    if (i % 3 === 0) multiplos3.push(i);
}
console.log(`Múltiplos de 3 entre ${inicio} y ${fin}: ${multiplos3.join(", ")}`);
// 8. Mostrar los multiplos de 2 y 3 menores a 100
let multiplos = [];
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0 || i % 3 === 0) multiplos.push(i);
}
console.log("Múltiplos de 2 o 3 menores a 100:", multiplos);
// 9. Obtener la suma de los elementos de un array
let arr = [1, 2, 3, 4, 5];
let sumaArr = arr.reduce((acc, el) => acc + el, 0);
console.log("Suma del array:", sumaArr);
// 10. Sumar solo los elementos pares de un array
let sumaPares = arr.filter(n => n % 2 === 0).reduce((acc, el) => acc + el, 0);
console.log("Suma de elementos pares:", sumaPares);
// 11. Ingresar una palabra e identificar la letras distintas y sus repeticiones
let palabra3 = "PALA";
let contador = {};
for (let letra of palabra3) {
    letra = letra.toUpperCase();
    contador[letra] = (contador[letra] || 0) + 1;
}
console.log("Recuento de letras:", contador);
// 12. Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres
let personas = [
    { nombre: "Ana", sexo: "F", edad: 30 },
    { nombre: "Juan", sexo: "M", edad: 25 },
    { nombre: "María", sexo: "F", edad: 40 },
    { nombre: "Pedro", sexo: "M", edad: 20 },
];
let sumaEdades = 0;
let mujerMayor = null;
let hombreMenor = null;
let sumaEdadMujeres = 0;
let cantidadMujeres = 0;

for (let persona of personas) {

  sumaEdades += persona.edad;

  if (persona.sexo === "F") {
    cantidadMujeres++;
    sumaEdadMujeres += persona.edad;
    if (!mujerMayor || persona.edad > mujerMayor.edad) {
      mujerMayor = persona;
    }
  }

  
  if (persona.sexo === "M") {
    if (!hombreMenor || persona.edad < hombreMenor.edad) {
      hombreMenor = persona;
    }
  }
}


const promedioTotal = sumaEdades / personas.length;
const promedioMujeres = cantidadMujeres > 0 ? sumaEdadMujeres / cantidadMujeres : 0;


console.log("Promedio de edad total:", promedioTotal);
console.log("Mujer con mayor edad:", mujerMayor ? mujerMayor.nombre : "Ninguna");
console.log("Hombre con menor edad:", hombreMenor ? hombreMenor.nombre : "Ninguno");
console.log("Promedio de edad de mujeres:", promedioMujeres);
// 13. Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos

function promedioEdad(lista) {
    return lista.reduce((sum, p) => sum + p.edad, 0) / lista.length;
}

function mujerMayorEdad(lista) {
    let mujeres = lista.filter(p => p.sexo === "F");
    return mujeres.reduce((max, p) => p.edad > max.edad ? p : max).nombre;
}

function hombreMenorEdad(lista) {
    let hombres = lista.filter(p => p.sexo === "M");
    return hombres.reduce((min, p) => p.edad < min.edad ? p : min).nombre;
}

function promedioEdadMujeres(lista) {
    let mujeres = lista.filter(p => p.sexo === "F");
    return promedioEdad(mujeres);
}

console.log("Promedio edad:", promedioEdad(personas));
console.log("Mujer mayor edad:", mujerMayorEdad(personas));
console.log("Hombre menor edad:", hombreMenorEdad(personas));
console.log("Promedio edad mujeres:", promedioEdadMujeres(personas));
// 14. Filtrar los elementos de un array de números para obtener solo los pares
let nums = [1, 2, 3, 4, 5, 6];
let pares = nums.filter(n => n % 2 === 0);
console.log("Elementos pares:", pares);
//15. Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado
function obtenerDivisibles(min, max, divisor) {
    let resultado = [];
    for (let i = min; i <= max; i++) {
        if (i % divisor === 0) resultado.push(i);
    }
    return resultado;
}
console.log("Divisibles por 5 entre 10 y 50:", obtenerDivisibles(10, 50, 5));