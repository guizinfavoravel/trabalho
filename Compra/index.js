const preco = parseFloat(prompt("insira o valor da compra"));

if (isNaN(preco)) {
    alert("esse numero é invalido");
}

if (!isNaN(preco)) {
    if (preco >= 100) {
        alert((`Voce recebeu um desconto de ${preco * 0.1}, com isso seu valor total é ${preco * 0.9} reais`));

        
    } else {
        alert(`Voce nao recebeu um desconto, entao seu valor continua sendo ${preco}`);
    }
}

