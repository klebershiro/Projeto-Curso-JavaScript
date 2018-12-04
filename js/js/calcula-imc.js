var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i ++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdGordura = paciente.querySelector(".info-gordura");
    var gordura = tdGordura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhvalido = validaPeso(peso);
    var alturaEhvalida = validaAltura(altura);

    if (!pesoEhvalido) {
        console.log("Peso Inválido");
        pesoEhvalido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhvalida) {
        console.log ("Altura Inválida");
        alturaEhvalida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhvalida && pesoEhvalido) {
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
   
}

function validaPeso(peso) {
    if(peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2); 
}

// ou pode ser desse jeito
//function mostraMensagem() {
//console.log("Olá, fui clicado");
