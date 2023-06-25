alert("hola")
// definimos la clase del objeto..
class filamento {
    constructor(nombre,precioKg){
        this.nombre = nombre;
        this.precioKg = precioKg
    }
}
let filamento1 = new filamento("pla",4000);
let filamento2 = new filamento("abs",4650);
let filamento3 = new filamento("petg",4270);
let filamento4 = new filamento("tpu",4120);

//array que contiene los objetos
let filamentos = [filamento1,filamento2,filamento3,filamento4]

// creamos la funcion para los calculos
let condicion = prompt("Desea realizar los calculos? (si/no)").toLocaleLowerCase();

function coste(filamento){
    let peso = prompt("ingrese el Peso de la pieza en KG");
    let filamento = prompt("ingrese el tipo de filamento (0 PLA - 1 ABS - 2 PETG - 3 TPU)");
    let tiempo = prompt("ingrese el tiempo de impresion en Horas");
    
    if (filamento === 0){
        costeTotal = filamentos[0].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
    } else if(filamento === "abs"){
        costeTotal = filamentos[1].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
    }
    else if(filamento === "petg"){
        costeTotal = filamentos[2].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
    }
    else if(filamento === "tpu"){
        costeTotal = filamentos[3].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
    }
}

    while (condicion != 'no'){
        coste(filamento);
        alert("costo total de la impresion es de: " +"$"+ costeTotal + " pesos");
        condicion = prompt("Desea realizar Otro calculo? (si/no)").toLocaleLowerCase();
    }
    

//                       ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ codigo viejo ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇

//Declaramos algunas variables para usarlas luego

//tomamos como un gasto fijo que en electrecidad tenemos un consumo de 26.05 kw/H
let costesLuz = 26.05;
//tomamos como consumo medio de la impresora un 0.50 kw
let consumoMedio = 0.50