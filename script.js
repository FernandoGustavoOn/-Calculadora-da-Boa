var numero1 = document.querySelector("#numero1")
var numero2 = document.querySelector("#numero2")
const multi = document.getElementById("multiplicar")
const mais = document.querySelector("#mais")
const menos = document.querySelector("#menos")
const divisao = document.querySelector("#divisao")
const resultado = document.querySelector("#resultado")


multi.addEventListener("click", ()=>{
    let n1 = numero1.value
    let n2 = numero2.value
    let multiplicado = n1 * n2
    resultado.value = multiplicado
})
mais.addEventListener("click", ()=>{
    let n1 = Number(numero1.value)
    let n2 = Number(numero2.value)
    let multiplicado = n1 + n2
    resultado.value = multiplicado
})
menos.addEventListener("click", ()=>{
    let n1 = numero1.value
    let n2 = numero2.value
    let multiplicado = n1 - n2
    resultado.value = multiplicado
})
divisao.addEventListener("click", ()=>{
    let n1 = numero1.value
    let n2 = numero2.value
    let multiplicado = n1 / n2
    resultado.value = multiplicado
})
