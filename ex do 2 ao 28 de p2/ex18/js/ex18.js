
var dataValida = (dia, mes, ano) 
    var data = (ano, mes - 1, dia);
    



var parseInt = prompt("Digite uma data no formato dd/mm/aaaa:");
let partes = ("/");


var dia = parseInt(partes[0]);
var mes = parseInt(partes[1]);
var ano = parseInt(partes[2]);


if (dataValida(dia, mes, ano)) {
    alert("A data é válida.");
} else {
    alert("A data é inválida.");
}
