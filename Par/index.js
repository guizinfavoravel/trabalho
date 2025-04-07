const Numero = (parseInt(prompt("insira um numero")));//declarando o  numero oara saber se ele é par


if(isNaN(Numero)){
    alert("seu numero é invalido");// utilizando o if (isNaN) para avisar que letras dao erro
}

if (!isNaN(Numero)) {

    if (Numero % 2 == 0) {
        alert("seu numero é par");// utilizando o if para informar que o numero tem que ser dividido por 2 e sobrar 0 para ser par
    }else{
        alert("seu numero nao é par");

    }


}