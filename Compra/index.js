const preco = parseFloat(prompt("insira o valor da compra"));//declarando a variavel para o preço da compra para informar o desconto

if (isNaN(preco)) {
    alert("esse numero é invalido");// utilizando o if(isNAN) para saber se o numero e uma letra e se for ira dar invalido
}

if (!isNaN(preco)) {
    if (preco >= 100) {
        alert((`Voce recebeu um desconto de ${preco * 0.1}, com isso seu valor total é ${preco * 0.9} reais`));//utilizando o if para avisar que se for maior que 100 o desconto ira ser de u preço x 0.1 fora  o valor total que vai ser x 0.9

        
    } else {
        alert(`Voce nao recebeu um desconto, entao seu valor continua sendo ${preco}`);
    }
}

