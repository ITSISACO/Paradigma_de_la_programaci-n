function sumar (x) {
   let accion = x + 5;
   return accion;
};

console.log(sumar(7));

function Division(x){
    let accion = x / 2;
    return accion;
};

console.log(Division(10));

let resultado = 0;
function SumarPrecios(a , b){
    return resultado = resultado + a * b;
};

console.log(SumarPrecios(4 ,6));
console.log(SumarPrecios(2 ,3));
console.log(SumarPrecios(5, 8));

let Var= ""
function Oracion( a ){
    return Var = Var + a ;
};

console.log(Oracion( "hola "));
console.log(Oracion( " mundo" ));
console.log(Oracion(" ,"));
console.log(Oracion( "¿como estan?"))

function Multiplicar (a){
    return a * a;
};

function SumaDeLaMultiplicacion(num1, num2){
    return Multiplicar(num1) + Multiplicar(num2);
};

console.log(SumaDeLaMultiplicacion(3, 4));