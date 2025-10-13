/* En este documento voy a explicar 
    los conceptos basicos de typescrip 
*/

// para imprimir valores en la consola 

//Para definir Strings se pueden usar comillas dobles o simples o con templeates literales 
console.log("Hola mundo");
console.log('holaMundo');
let tagDiv: String= ' Para tener comillas dobles en el texto "solo las pongo en el texto" y a la variable con sencillas';
console.log(tagDiv)

// para concatenear solo se usa el signo +

let apellido : string ='Apellido';
let nombre :string='Nombre'

let NombreApellido: string = nombre +' '+ apellido;
console.log(NombreApellido)
console.log("el nombre y apellido es: "+ NombreApellido);
// esta es otra forma pero esta solo se puede usar con comillas graves o el template literals para que se pueda usar
console.log(` El nombre y apelldo es:  ${NombreApellido}`)

// otra forma es concatenar
console.log(apellido.concat(nombre));
console.log(`La longitud de la cadena ${apellido} es: ${apellido.length}`);

/* para poder correr los archivos lo uqe hago es que primero
 Voy a la direccion donde esta el archivo,
 Le doy el comando: tsc "nombre".ts  El nombre del archivo 
 Lo anterior crea el archico en Java Script
 Y para ejecutarlo finalmente lo que hago es poner el comando 
 node "nombre".ts y nombre es el nombre del archivo
*/

//--------------------------------------------------NUMBER----------------------------------------------

console.log(10)
console.log(3.1416)

let varNumber: number =10
// para aumentarlo en uno
varNumber++;
// para disminuir 
varNumber--;

//estan los mismo operadores += -= *= / potencia raiz redondear


//Para los resultados binarios lo que hacemos asi 
let binario = 0b1010;
console.log(binario); // sale 10
console.log(binario.toString(2))// no estoy muy segura de porque se usa 10

//-------------------------------------------------BOOLEAN--------------------------------------


let soy_feliz:boolean = true;
let estres:boolean=false;

let seguir_siendo_feli: boolean;

seguir_siendo_feli = soy_feliz&&estres;

console.log(seguir_siendo_feli);

console.log(varNumber>=20? varNumber:20-varNumber);

console .log(varNumber<=5? varNumber:5-varNumber);

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

let tenern: number[]=[12,2,6,34,78]
let tner2: Array<number>= [12,2,6,34,78]

console.log(tner2)

let valoresMexclados : Array<string|number>= ['hola',12,65,4,'feliz']

valoresMexclados.push(34.6)

console.log(valoresMexclados)

console.log(valoresMexclados.indexOf(34.6))

//----------------------------TUPLAS ------------------------

let estudiante:[number,String,boolean];
estudiante=[1,'Maria',true];

console.log(`El estudiante acural es: 
    Id: ${estudiante[0]},
    Nombre: ${estudiante[1]},
    Esta Activo: ${estudiante[2]? 'si':'no'}
    `);


    // esto es un arreglo de tuplas 
let estudianres : [number,String,boolean][]=[estudiante]




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

function imprimir(aImpremir: String): void{
    console.log(aImpremir);
}

imprimir('Holi')

// Cuando tenemos una funcioon donde el parametro es opcioonal a ese parametro se le pone el signo ?

function nombresApellido(nombre:string, apellido:string, segundoNombre?:string):string{
    return `Nombres: ${nombre} ${segundoNombre}
    Apellido: ${apellido}`;
}

let respuesta:string=nombresApellido('Laura','Avelino','Carolina')
console.log(respuesta);


// ---------------------------------------------OPERADOR =>----------------------------------------------
//arroy function, lambda funtion 

let saludarConsola =()=> console.log('Hola');

saludarConsola();

let varSumar=(op1: number, op2:number):number => op1+op2;
console.log(varSumar(4,10));

let varMult =(op1:number,op2:number)=> op1*op2;
function calculadora(op1: number, op2:number, operador:any):number{
    return operador(op1,op2)
}

console.log("Tengo una caculadora")
console.log(`10*2 es ${calculadora(10,2,varMult)}`);
console.log(`10+2 es ${calculadora(10,2,varSumar)}`)
 
// ------------------------------Funciones de alto orden ya predefinidas sobre arreglos---------------
//for ecach filter search map reduce sort reverse

// ......................................................CLASES ............................

// Se defibnen con la palabra reservada class tienen atributos y metodos todo como en java

console.log("CLASES")
class Estudiante{
    private id:number;
    private nombre:string;
    private activo:boolean;

    constructor(ideE: number, nomber:string, activo: boolean){
        this.id = ideE;
        this.nombre= nomber;
        this.activo=activo;
    }

    estaActivo():boolean{
        return this.activo;
    }

    activar():void{
        this.activo=true;
    }
    desplegar():void{
        console.log( `Nombre: ${this.nombre},
        ID: ${this.id},
        Activo: ${this.activo}`);
    }
}


let e1:Estudiante = new Estudiante(1,'Luis',false);
e1.activar();
e1.desplegar();
