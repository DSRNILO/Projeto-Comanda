var input = document.getElementById("valor_adicionado");
var valor = document.getElementById("adicionar");
var span = document.getElementById("itens");
var botao = document.getElementById("total");
var totalapagar = document.getElementById("valorconta");
var listaitens = document.getElementById("lista");
var lista = [];

function adicionar(){ 

if (input.value >= 1 ) {
lista.push(parseFloat(input.value)); 
}else {

}

span.textContent = lista.length;
input.value = null
}


function calcular(){
if (lista.length >= 2 ) {
  var soma = lista.reduce(function(soma, i) {
  return soma + i;
 });
}else {

}
totalapagar.textContent = soma.toFixed(2)
listaitens.textContent = lista;
}


valor.addEventListener('click', adicionar);
botao.addEventListener('click',  calcular);
