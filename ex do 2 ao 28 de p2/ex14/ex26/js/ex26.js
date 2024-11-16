
var tipoCombustivel = parseFloat(prompt("Digite o tipo de combustível (A-álcool, G-gasolina):"));


var litrosVendidos = parseFloat(prompt("Digite a quantidade de litros vendidos:"));


var precoGasolina = 5.50;
var precoAlcool = 3.90;


var precoporLitro;
var desconto;


if (tipoCombustivel == "A") {
    precoPorLitro = precoAlcool;
    if (litrosVendidos <= 20) {
        (desconto = 0.03);
    } else {
        (desconto = 0.05);
    }
} else if (tipoCombustivel == "G") {
    precoPorLitro = precoGasolina;
    if (litrosVendidos <= 20) {
       (desconto = 0.04);
    } else {
        (desconto = 0.06);
    }
} else {
    alert("Tipo de combustível inválido.");
}


var valorTotal = litrosVendidos * precoPorLitro * (1 - desconto);


alert("O valor a ser pago é: R$ " + valorTotal);
