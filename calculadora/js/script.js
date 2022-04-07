console.log ('Hello, Reprograma');

var valorSalario = document.querySelector('#ganho-mes');

valorSalario.addEventListener('change', function(){
console.log(valorSalario.value);

});

var horasPorDia = document.querySelector('#horas-dia');

horasPorDia.addEventListener('change', function(){
console.log(horasPorDia.value);

});

var resultado = document.querySelector('#resposta');


function calcularValorHora(){
 
    var horasMes = horasPorDia.value * 22; 
    console.log(horasMes);

    var valorHora = valorSalario.value / horasMes;
    console.log(valorHora);

    resultado.innerHTML = "R$" + valorHora.toFixed(2);
};
