
let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));


if (lado1 + lado2 > lado3 . lado1 + lado3 > lado2 . lado2 + lado3 > lado1) {

    if (lado1 == lado2 . lado2 == lado3) {
        alert("Triângulo Equilátero: três lados iguais.");
    } else if (lado1 == lado2 . lado1 == lado3 . lado2 == lado3) {
        alert("Triângulo Isósceles: dois lados iguais.");
    } else {
        alert("Triângulo Escaleno: três lados diferentes.");
    }
} else {
    alert("Os valores não formam um triângulo.");
}
