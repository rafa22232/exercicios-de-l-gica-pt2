
var valorSaque = parseInt(prompt("Digite o valor do saque (entre 10 e 600 reais):"));


if (valorSaque < 10 || valorSaque > 600) {
    alert("Valor inválido. O valor do saque deve ser entre 10 e 600 reais.");
} else {
    
    var notas100 = (valorSaque / 100);
    valorSaque %= 100;

    var notas50 = (valorSaque / 50);
    valorSaque %= 50;

    var notas10 = (valorSaque / 10);
    valorSaque %= 10;

    var notas5 = (valorSaque / 5);
    valorSaque %= 5;

    var notas1 = valorSaque;

    
    alert("Notas de 100: " + notas100);
    alert("Notas de 50: " + notas50);
    alert("Notas de 10: " + notas10);
    alert("Notas de 5: " + notas5);
    alert("Notas de 1: " + notas1);
}
