//Declaramos algunas variables para usarlas luego
let pla = 3500;
let abs = 4330;
let petg = 3720;
let tpu = 3850;
//tomamos como un gasto fijo que en electrecidad tenemos un consumo de 26.05 kw/H
let costesLuz = 26.05;
//tomamos como consumo medio de la impresora un 0.50 kw
let consumoMedio = 0.50

let condicion = prompt("Desea realizar los calculos? (si/no)")
//ingreso de datos del usuario



while (condicion != 'no'){
    let peso = prompt("ingrese el Peso de la pieza en KG");
    let filamento = prompt("ingrese el tipo de filamento (pla-abs-petg-tpu)");
    let tiempo = prompt("ingrese el tiempo de impresion en Horas");
        if (filamento === "pla"){
            costeTotal = peso*pla/1000 + tiempo*costesLuz*consumoMedio;
        } else if(filamento === "abs"){
            costeTotal = peso*abs/1000 + tiempo*costesLuz*consumoMedio;
        }
        else if(filamento === "petg"){
            costeTotal = peso*petg/1000 + tiempo*costesLuz*consumoMedio;
        }
        else if(filamento === "tpu"){
            costeTotal = peso*tpu/1000 + tiempo*costesLuz*consumoMedio;
        }

alert("costo total de la impresion es de: " +"$"+ costeTotal + " pesos");
 
condicion = prompt("Desea realizar Otro calculo? (si/no)")
}


 
// Imprimir los datos recolectados
