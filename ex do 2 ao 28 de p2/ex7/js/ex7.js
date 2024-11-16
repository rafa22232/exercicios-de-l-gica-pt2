
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var num3 = parseFloat(prompt("Digite o terceiro número:"));


var maior = num1;
var menor = num1;


if (num2 > maior) {
    maior = num2;
}
if (num3 > maior) {
    maior = num3;
}


if (num2 < menor) {
    menor = num2;
}
if (num3 < menor) {
    menor = num3;
}


alert("O maior número é: " + maior);
alert("O menor número é: " + menor);
