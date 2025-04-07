const numero = parseFloat(prompt("insira o valor do numero"));//declaraçao da varivael numero dar o numero para saber se é multiplo de 5

if (isNaN(numero)) {
    alert("esse numero é invalido"); // utilizo o comando if para saber que uma letra nao e um numero
}else {
    if (numero % 5 == 0) {
        alert("esse Numero é multiplo de 5");// utilizando o if para fazer o calculo para mostrar na tela se é um multiplo ou nao
    } else {
        alert("seu numero nao é multiplo de 5");
    }
}