// Calcular o IMC
function calcularImc() {
	var formulario = document.getElementById("formulario");

	var altura = +formulario.altura.value;
	var peso = +formulario.peso.value; 

	imc = peso/(altura*altura);

	formulario.imc.value = imc.toFixed(2); 
	

// Resultado no campo.

	if (imc < 18.5) {
			formulario.resultado.value = ("ABAIXO DO PESO.");
	} else if (imc >= 18.5 && imc < 25) {
			formulario.resultado.value = ("SEU PESO ESTÁ NORMAL.");
	} else if (imc >= 25 && imc < 30) {
			formulario.resultado.value = ("ACIMA DO PESO.");
	} else if (imc >= 30 && imc < 35) {
			formulario.resultado.value = ("OBESIDADE.");	
	} else if (imc > 35) {
			formulario.resultado.value = ("OBESIDADE MÓRBIDA.");
	}
}

