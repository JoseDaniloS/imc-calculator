
//DEFINIÇÃO DE VARIAVEIS CONSTANTES
const tn1 = document.getElementById('Altura')
const tn2 = document.getElementById('Peso')
const result = document.getElementById('resultado')

function Calcular(){
    
    //VARIVEIS LOCAIS
    let altura = Number(tn1.value)
    let peso = Number(tn2.value)
    //VARIAVEL GLOBAL
    var resultado = peso / (altura ** 2)

    //VERIFICA SE FOI DIGITADO ALGO NOS INPUT
    if((tn1.value == "")||(tn2.value == "")){
        result.innerText = null
    }
    else{
        result.innerText = 'SEU IMC:' + resultado.toFixed(1)
        result.style.color ="white"
        result.style.fontSize = "13px"
        result.style.background = "red"
        result.style.padding = "5px"
        result.style.borderRadius = "10px"
    }

}
//FUNÇÃO PARA LIMPAR OS CAMPOS DE INPUT
function Limpar(){
    tn1.value = null
    tn2.value = null
    result.innerText = null
    result.style.background = "transparent"

}

