
var salarioAtual = parseFloat(prompt("Digite o salário atual do colaborador:"));


var percentualAumento;
var valorAumento;


if (salarioAtual <= 280) {
    percentualAumento = 20;
} else if (salarioAtual <= 700) {
    percentualAumento = 15;
} else if (salarioAtual <= 1500) {
    percentualAumento = 10;
} else {
    percentualAumento = 5;
}


valorAumento = salarioAtual * (percentualAumento / 100);
var novoSalario = salarioAtual + valorAumento;


alert("Salário antes do reajuste: R$ " + salarioAtual);
alert("Percentual de aumento aplicado: " + percentualAumento + "%");
alert("Valor do aumento: R$ " + valorAumento);
alert("Novo salário, após o aumento: R$ " + novoSalario);
