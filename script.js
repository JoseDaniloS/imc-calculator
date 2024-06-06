
var tn1 = document.getElementById('Altura')
var tn2 = document.getElementById('Peso')
var result = document.getElementById('resultado')

function Calcular(){

    var altura = Number(tn1.value)
    var peso = Number(tn2.value)
    var resultado = peso / (altura ** 2)
    
    result.innerText = 'SEU IMC:' + resultado.toFixed(2)
    result.style.color ="rgb(209, 32, 32)"
    result.style.fontSize = "15px"

}

function Limpar(){
    tn1.value = null
    tn2.value = null
    result.innerText = null

}

