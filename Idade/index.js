const idade = (parseInt(prompt("insira um numero")));

if(isNaN(idade)){
    alert("seu numero é invalido");
}

if (!isNaN(idade)) {
    if (idade > 18) {
        alert("voce é maior de idade");
    }else{
        alert("voce é menor de idade ");

    }


}