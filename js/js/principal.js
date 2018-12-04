var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");

var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc");

var pesoEhvalido = true
var alturaEhvalida = true

if (peso <= 0 || peso >= 1000) {
    console.log("Peso Inválido!");
    pesoEhvalido = false;
    tdPeso.textContent = "Peso Inválido!";
}

if (altura <= 0 || altura >= 3) {
    console.log("Altura Inválida!");
    alturaEhvalida = false;
    tdAltura.textContent = "Altura Inválida!";
}

if (pesoEhvalido && alturaEhvalida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}


console.log(paciente);
console.log(tdPeso);
console.log(peso);
console.log(altura);
console.log(imc);