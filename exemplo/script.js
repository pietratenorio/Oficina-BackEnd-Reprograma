console.log('Olá, mundo');

var inputAno = document.querySelector('#ano')


var resposta = document.querySelector('#respostaAno')

function cliquei(){
    resposta.innerHTML = inputAno.valueAsNumber;
};