
var tipoCarne = parseFloat(prompt("Digite o tipo de carne (File Duplo, Alcatra, Picanha):"));


var quantidade = parseFloat(prompt("Digite a quantidade de carne (em Kg):"));


var tipoPagamento = parseFloat(prompt("Digite o tipo de pagamento (Cartão Tabajara, Outro):"));


var precoFileDuplo = 4.90;
var precoAlcatra = 5.90;
var precoPicanha = 6.90;


var precoTotal;


if (tipoCarne == "file duplo") {
    precoTotal = quantidade * precoFileDuplo;
} else if (tipoCarne == "alcatra") {
    precoTotal = quantidade * precoAlcatra;
} else if (tipoCarne == "picanha") {
    precoTotal = quantidade * precoPicanha;
} else {
    alert("Tipo de carne inválido.");
}


var desconto = 0;
if (tipoPagamento == "cartão tabajara") {
    desconto = precoTotal * 0.05;
}


var valorAPagar = precoTotal - desconto;


var cupomFiscal = "Tipo de carne: " + tipoCarne + "\n" 
                  "Quantidade: " + quantidade + " \n" 
                  "Preço total: R$ " + precoTotal + "\n" 
                  "Tipo de pagamento: " + tipoPagamento + "\n" 
                  "Valor do desconto: R$ " + desconto + "\n" 
                  "Valor a pagar: R$ " + valorAPagar + "/n"


alert(cupomFiscal);
