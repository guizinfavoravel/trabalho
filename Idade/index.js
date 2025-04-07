const idade = (parseInt(prompt("insira um numero")));//declarando a variavel para saber se voce e maior de idade ou nao

if(isNaN(idade)){
    alert("seu numero é invalido");// utilizando o if (isNaN) para avisar que letras dao erro
}

if (!isNaN(idade)) {
    if (idade > 18) {
        alert("voce é maior de idade");//utilizando o if para avisar que se for maior que 18 e maior de idade e se for menos que 18 e menor de idade
    }else{
        alert("voce é menor de idade ");

    }


}