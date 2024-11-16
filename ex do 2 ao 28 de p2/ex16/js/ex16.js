
var a = parseFloat(prompt("Digite o valor de a:"));

if (a == 0) {
    alert("O valor de a não pode ser zero. A equação não é do segundo grau.");
} else {
    var b = parseFloat(prompt("Digite o valor de b:"));
    var c = parseFloat(prompt("Digite o valor de c:"));

    
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        alert("A equação não possui raízes reais (delta negativo).");
    } else if (delta == 0) {
        let raiz = -b / (2 * a);
        alert("A equação possui apenas uma raiz real: " + raiz);
    } else {
        let raiz1 = (-b + (delta)) / (2 * a);
        let raiz2 = (-b - (delta)) / (2 * a);
        alert("A equação possui duas raízes reais: " + raiz1 + " e " + raiz2);
    }
}
