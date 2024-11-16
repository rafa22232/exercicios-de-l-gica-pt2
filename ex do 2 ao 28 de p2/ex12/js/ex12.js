
var valorHora = parseFloat(prompt("Digite o valor da sua hora:"));
var horasTrabalhadas = parseFloat(prompt("Digite a quantidade de horas trabalhadas no mês:"));


var salarioBruto = valorHora * horasTrabalhadas;


var descontoIR;
var percentualIR;


if (salarioBruto <= 1500) {
    percentualIR = 7.5;
} else if (salarioBruto <= 2500) {
    percentualIR = 15;
} else if (salarioBruto <= 2259.20) {
    percentualIR = 0;
} else {
    percentualIR = 27.5;
}

descontoIR = salarioBruto * (percentualIR / 100);


var descontoSindicato = salarioBruto * 0.03;
var fgts = salarioBruto * 0.08;

var salarioLiquido = salarioBruto - descontoIR - descontoSindicato;


alert("Salário Bruto: R$ " + salarioBruto);
alert("Desconto IR: R$ " + descontoIR);
alert("Desconto Sindicato: R$ " + descontoSindicato);
alert("FGTS (não descontado): R$ " + fgts);
alert("Salário Líquido: R$ " + salarioLiquido);
