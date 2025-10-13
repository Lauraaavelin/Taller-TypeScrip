/* En este documento voy a explicar
    los conceptos basicos de typescrip
*/
// para imprimir valores en la consola 
//Para definir Strings se pueden usar comillas dobles o simples o con templeates literales 
console.log("Hola mundo");
console.log('holaMundo');
var tagDiv = ' Para tener comillas dobles en el texto "solo las pongo en el texto" y a la variable con sencillas';
console.log(tagDiv);
// para concatenear solo se usa el signo +
var apellido = 'Apellido';
var nombre = 'Nombre';
var NombreApellido = nombre + ' ' + apellido;
console.log(NombreApellido);
console.log("el nombre y apellido es: " + NombreApellido);
// esta es otra forma pero esta solo se puede usar con comillas graves o el template literals para que se pueda usar
console.log(" El nombre y apelldo es:  ".concat(NombreApellido));
// otra forma es concatenar
console.log(apellido.concat(nombre));
console.log("La longitud de la cadena ".concat(apellido, " es: ").concat(apellido.length));
/* para poder correr los archivos lo uqe hago es que primero
 Voy a la direccion donde esta el archivo,
 Le doy el comando: tsc "nombre".ts  El nombre del archivo
 Lo anterior crea el archico en Java Script
 Y para ejecutarlo finalmente lo que hago es poner el comando
 node "nombre".ts y nombre es el nombre del archivo
*/
//--------------------------------------------------NUMBER----------------------------------------------
console.log(10);
console.log(3.1416);
var varNumber = 10;
// para aumentarlo en uno
varNumber++;
// para disminuir 
varNumber--;
//estan los mismo operadores += -= *= / potencia raiz redondear
//Para los resultados binarios lo que hacemos asi 
var binario = 10;
console.log(binario); // sale 10
console.log(binario.toString(2)); // no estoy muy segura de porque se usa 10
//-------------------------------------------------BOOLEAN--------------------------------------
var soy_feliz = true;
var estres = false;
var seguir_siendo_feli;
seguir_siendo_feli = soy_feliz && estres;
console.log(seguir_siendo_feli);
console.log(varNumber >= 20 ? varNumber : 20 - varNumber);
console.log(varNumber <= 5 ? varNumber : 5 - varNumber);
// ---------------------------------------NULL-------------------------
// solo es dejarlo asi y void es tenerlo como undefine osea no hay tanta vaina que mirar 
// -----------------------------------------------------------------------------------ENUM---------------------------------------------------------
/*
esto nofunciono por la forma de escribir la enumeracion debo investigar mejor

enum Continentes{
    America=1,
    Africa,
    Europa,
    Oceania,
}


let continente : Continentes = Continentes.America;

console.log(`Mi continente es ${continente}`);

*/
// -------------------------------------------------ARREGLOS-----------------------
var tenern = [12, 2, 6, 34, 78];
var tner2 = [12, 2, 6, 34, 78];
console.log(tner2);
var valoresMexclados = ['hola', 12, 65, 4, 'feliz'];
valoresMexclados.push(34.6);
console.log(valoresMexclados);
console.log(valoresMexclados.indexOf(34.6));
//----------------------------TUPLAS ------------------------
var estudiante;
estudiante = [1, 'Maria', true];
console.log("El estudiante acural es: \n    Id: ".concat(estudiante[0], ",\n    Nombre: ").concat(estudiante[1], ",\n    Esta Activo: ").concat(estudiante[2] ? 'si' : 'no', "\n    "));
// esto es un arreglo de tuplas 
var estudianres = [estudiante];
//......................................... CONDICIONALES...............................
/* sigue saliendo error los enum
enum Continentes{
    America=1,
    Europa,
    Africa,
    Oceania
}


let unContinente: Number=5;

if (unContinente==Continentes.America){
    console.log(`Es america: ${Continentes.America}`)
}
*/
// EN SCRIPT FUNCIONES PUEDE DEVOLVER FUNCIONES 
function imprimir(aImpremir) {
    console.log(aImpremir);
}
imprimir('Holi');
// Cuando tenemos una funcioon donde el parametro es opcioonal a ese parametro se le pone el signo ?
function nombresApellido(nombre, apellido, segundoNombre) {
    return "Nombres: ".concat(nombre, " ").concat(segundoNombre, "\n    Apellido: ").concat(apellido);
}
var respuesta = nombresApellido('Laura', 'Avelino', 'Carolina');
console.log(respuesta);
// ---------------------------------------------OPERADOR =>----------------------------------------------
//arroy function, lambda funtion 
var saludarConsola = function () { return console.log('Hola'); };
saludarConsola();
var varSumar = function (op1, op2) { return op1 + op2; };
console.log(varSumar(4, 10));
var varMult = function (op1, op2) { return op1 * op2; };
function calculadora(op1, op2, operador) {
    return operador(op1, op2);
}
console.log("Tengo una caculadora");
console.log("10*2 es ".concat(calculadora(10, 2, varMult)));
console.log("10+2 es ".concat(calculadora(10, 2, varSumar)));
// ------------------------------Funciones de alto orden ya predefinidas sobre arreglos---------------
//for ecach filter search map reduce sort reverse
// ......................................................CLASES ............................
// Se defibnen con la palabra reservada class tienen atributos y metodos todo como en java
console.log("CLASES");
var Estudiante = /** @class */ (function () {
    function Estudiante(ideE, nomber, activo) {
        this.id = ideE;
        this.nombre = nomber;
        this.activo = activo;
    }
    Estudiante.prototype.estaActivo = function () {
        return this.activo;
    };
    Estudiante.prototype.activar = function () {
        this.activo = true;
    };
    Estudiante.prototype.desplegar = function () {
        console.log("Nombre: ".concat(this.nombre, ",\n        ID: ").concat(this.id, ",\n        Activo: ").concat(this.activo));
    };
    return Estudiante;
}());
var e1 = new Estudiante(1, 'Luis', false);
e1.activar();
e1.desplegar();
export {};
//# sourceMappingURL=explicacion.js.map