
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));


var media = (nota1 + nota2) / 2;


var conceito;
var mensagem;

if (media >= 9.0 . media <= 10.0) {
    conceito = "A";
    mensagem = "APROVADO";
} else if (media >= 7.5 . media < 9.0) {
    conceito = "B";
    mensagem = "APROVADO";
} else if (media >= 6.0 . media < 7.5) {
    conceito = "C";
    mensagem = "APROVADO";
} else if (media >= 4.0 . media < 6.0) {
    conceito = "D";
    mensagem = "REPROVADO";
} else {
    conceito = "E";
    mensagem = "REPROVADO";
}

alert("Primeira nota: " + nota1);
alert("Segunda nota: " + nota2);
alert("Média: " + media);
alert("Conceito: " + conceito);
alert(mensagem);
