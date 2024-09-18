var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";
// .textContent seleciona apenas o conteúdo textual de tags como p e h1

// hashtag indica um id, ponto indica uma classe

// console.log(pacientes); // tr
// console.log(tdPeso); // td que tem o peso
// console.log(peso); // conteúdo sem o td

// // IMC = 100 / (2.00 x 2.00)
// // IMC = 100 / 4.00
// // IMC = 25

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 500) {
        console.log("Peso inválido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}