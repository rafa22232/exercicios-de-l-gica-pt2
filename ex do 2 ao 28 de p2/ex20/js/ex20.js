
var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;


let mensagem;
if (media == 10) {
    mensagem = "Aprovado com Distinção";
} else if (media >= 7) {
    mensagem = "Aprovado";
} else {
    mensagem = "Reprovado";
}


alert("Primeira nota: " + nota1);
alert("Segunda nota: " + nota2);
alert("Terceira nota: " + nota3);
alert("Média: " + media);
alert(mensagem);
