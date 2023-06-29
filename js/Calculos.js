//aca tenemos los objetos en una lista
var filamentos = [
    { nombre: "pla", precioKg:4000},
    { nombre: "abs", precioKg:4650},
    { nombre: "petg", precioKg:4270},
    { nombre: "tpu", precioKg:4120}
];
// creamos la funcion para los calculos
function coste(){
    //tomamos como un gasto fijo que en electrecidad tenemos un consumo de 28.05 kw/H
    let costesLuz = 28.05;
    //tomamos como consumo medio de la impresora un 0.50 kw
    let consumoMedio = 0.50;
    //entradas
    let tipo = prompt("ingrese el tipo de filamento").toLowerCase();
    let peso = prompt("ingrese el Peso de la pieza en KG");
    let tiempo = prompt("ingrese el tiempo de impresion en Horas");
    

    if (tipo === filamentos[0].nombre){
        costeTotal = parseInt(filamentos[0].precioKg)*parseFloat(peso)/1000 + parseFloat(tiempo)*costesLuz*consumoMedio;
        alert("PESO: "+ peso + "\nTIEMPO: "+ tiempo + "\nMATERIAL: "+filamentos[0].nombre+"\nCoste de impresion: " +"$"+ parseFloat(costeTotal) + " pesos");
    } else if (tipo === filamentos[1].nombre) {
        costeTotal = parseInt(filamentos[1].precioKg)*parseFloat(peso)/1000 + parseFloat(tiempo)*costesLuz*consumoMedio;
        alert("PESO: "+ peso + "\nTIEMPO: "+ tiempo + "\nMATERIAL: "+filamentos[1].nombre+"\nCoste de impresion: " +"$"+ parseFloat(costeTotal) + " pesos");
    } else if (tipo === filamentos[2].nombre) {
        costeTotal = parseInt(filamentos[2].precioKg)*parseFloat(peso)/1000 + parseFloat(tiempo)*costesLuz*consumoMedio;
        alert("PESO: "+ peso + "\nTIEMPO: "+ tiempo + "\nMATERIAL: "+filamentos[2].nombre+"\nCoste de impresion: " +"$"+ parseFloat(costeTotal) + " pesos");
    } else if(tipo === filamentos[3].nombre){
        costeTotal = parseInt(filamentos[3].precioKg)*parseFloat(peso)/1000 + parseFloat(tiempo)*costesLuz*consumoMedio;
        alert("PESO: "+ peso + "\nTIEMPO: "+ tiempo + "\nMATERIAL: "+filamentos[3].nombre+"\nCoste de impresion: " +"$"+ parseFloat(costeTotal) + " pesos");
    }
}

//bucle.
//tomé en cuenta en la entrega anterior del uso de los tolowercase!
condicion = prompt("Desea calcular los costos? (SI/NO)").toLowerCase();
while (condicion != 'no'){
    coste();
    condicion = prompt("Desea calcular OTRA VEZ? (SI/NO)").toLowerCase();
}
