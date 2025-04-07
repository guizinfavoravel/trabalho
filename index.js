const Numero = (parseFloat(prompt("insira um nuemro")));


if(isNaN(Numero)){
    alert("seu numero é invalido");
}

if (!isNaN(Numero)) {

    if (Numero > 0) {
        alert("seu numero é positivo");
    }else{
        alert("seu numero é menor que 0");

    }


}