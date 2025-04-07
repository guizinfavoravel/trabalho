const Numero = (parseInt(prompt("insira um nuemro")));


if(isNaN(Numero)){
    alert("seu numero é invalido");
}

if (!isNaN(Numero)) {

    if (Numero % 2 == 0) {
        alert("seu numero é par");
    }else{
        alert("seu numero nao é par");

    }


}