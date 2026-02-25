let nombre = "isaac";
let edad = 16;
let apellido = "ibarra";
let numero = 10;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    let operacion = a - b;
    return operacion;
}


console.log("el resultado de la suma es:" + sumar(numero, edad))
let  resultadoresta = restar(5, 7)

console.log ("el resultado de la resta:" + resultadoresta);
console.log ("nombre completo:"  + nombre + " " + apellido + ", edad:" + edad);
