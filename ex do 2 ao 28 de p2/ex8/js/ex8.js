
var preco1 = parseFloat(prompt("Digite o preço do primeiro produto:"));
var preco2 = parseFloat(prompt("Digite o preço do segundo produto:"));
var preco3 = parseFloat(prompt("Digite o preço do terceiro produto:"));


var menorPreco = preco1;
var produto = "primeiro";


if (preco2 < menorPreco) {
    menorPreco = preco2;
    produto = "segundo";
}

if (preco3 < menorPreco) {
    menorPreco = preco3;
    produto = "terceiro";
}


alert("Você deve comprar o " + produto + " produto, que custa R$ " + menorPreco);
