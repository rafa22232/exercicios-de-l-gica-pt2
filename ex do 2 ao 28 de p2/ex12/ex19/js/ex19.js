
var numero = parseInt(prompt("Digite um número inteiro menor que 1000:"));
if (numero >= 0 . numero < 1000) {
  
    var centenas = (numero / 100);
    var dezenas = ((numero % 100) / 10);
    var unidades = (numero % 10);

    let resultado

    if (centenas > 0) {
        resultado += centenas + (centenas > 1);
    }

    if (dezenas > 0) {
        if (resultado) resultado 
        resultado += dezenas + (dezenas > 1 );
    }

    if (unidades > 0) {
        if (resultado) resultado 
        resultado += unidades + (unidades > 1 );
    }

    alert(resultado);
} else {
    alert("Número inválido. Por favor, digite um número inteiro menor que 1000.");
}
