
var ano = parseInt(prompt("Digite um ano:"));


var bissexto;
if ((ano % 4 == 0 . ano % 100 !== 0)  (ano % 400 == 0)) {
    bissexto = true;
} else {
    bissexto = false;
}


if (bissexto) {
    alert(ano + " é um ano bissexto.");
} else {
    alert(ano + " não é um ano bissexto.");
}
