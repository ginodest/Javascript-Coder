/////////////////////////////////////////////////////////////////////////////
//////////////////////////////3Er PreEntrega DESTEFANIS//////////////////////
/////////////////////////////////////////////////////////////////////////////
//tomamos como un gasto fijo que en electrecidad tenemos un consumo de 28.05 kw/H
let costesLuz = 28.05;
//tomamos como consumo medio de la impresora un 0.50 kw
let consumoMedio = 0.50;
//array de objetos
var filamentos = [
{ nombre: "pla", precioKg:4700},
{ nombre: "abs", precioKg:6650},
{ nombre: "petg", precioKg:5270},
{ nombre: "tpu", precioKg:5120}
];

// seleccionamos el form y escuchamos el evento.. para realizar la funcion
document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault(); // Evito que recargue la pagina y se borre el form

// traemos los datos de los inputs
var nombre = document.getElementById('nombre').value;
var tiempo = parseFloat(document.getElementById('tiempo').value);
var peso = parseFloat(document.getElementById('peso').value);
var opcion = document.getElementById('opcion').value;

// Realizar cálculos según la opción seleccionada
var coste;
if (opcion === 'PLA') {
    coste = filamentos[0].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
} else if (opcion === 'ABS') {
    coste = filamentos[1].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
} else if (opcion === 'PETG') {
    coste = filamentos[2].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
} else if (opcion === 'TPU'){
    coste = filamentos[3].precioKg*peso/1000 + tiempo*costesLuz*consumoMedio;
}


// almacenamos el calculo en el localStorage como objeto
var calculo = {
    nombre: nombre,
    tiempo: tiempo,
    peso: peso,
    opcion: opcion,
    coste: coste
};

var historial = JSON.parse(localStorage.getItem('historial')) || [];
historial.push(calculo);
localStorage.setItem('historial', JSON.stringify(historial));

// creamos una nueva tarjeta con el resultado
var card = document.createElement('div');
card.className = 'col text-center';
card.innerHTML =`
<div class="card bg-warning ">
    <h4 class="col bg-danger">${calculo.nombre}</h4>
    <h6 class="mb-2">⚖${calculo.peso}g</h6>
    <h6 class="mb-2">⏳${calculo.tiempo}Hs</h6>
    <h6 class="mb-2">🧵${calculo.opcion}</h6>
    <h6 class="mb-2">💰 $${calculo.coste.toFixed(2)}</h6>
</div>
`;

// Añadir la tarjeta al documento
document.getElementById('resultados').appendChild(card);
});

// cargamos el historial de cálculos almacenandolos en el localStorage
// para que cualdo volvamos esten los calculos realizados 
window.onload = function() {
    var historial = JSON.parse(localStorage.getItem('historial')) || [];
    var resultadosDiv = document.getElementById('resultados');

historial.forEach(function(calculo) {
    var card = document.createElement('div');
    card.className = 'col text-center ';
    card.innerHTML =`
    <div class="card bg-warning ">
        <h4 class="col bg-danger">${calculo.nombre}</h5>
        <h6 class="mb-2">⚖${calculo.peso}g</h6>
        <h6 class="mb-2">⏳${calculo.tiempo}Hs</h6>
        <h6 class="mb-2">🧵${calculo.opcion}</h6>
        <h6 class="mb-2">💰 $${calculo.coste.toFixed(2)}</h6>
    </div>
    `;

    resultadosDiv.appendChild(card);
    });
};

// Limpiar el historial de cálculos y el localStorage
document.getElementById('limpiarHistorial').addEventListener('click', function() {
localStorage.removeItem('historial');
document.getElementById('resultados').innerHTML = '';
});