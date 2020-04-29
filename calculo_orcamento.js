function calcular() {
    var arduino = Number(armazenamento.value) / 5; // retoma o numero de sensores necessarios, com raio de 10 Metros.
    var perdas = Number(ganhos.value) / 4; //porcentagem de perda 25%. Essa variável divide o numero que custa o estoque por 4. 
    var preco = Number(100) * arduino; // retoma numero de sensores. Essa variável retomo ao valor gasto em cada sensor de arduino. 
    var gasto = Number(50) * arduino; // retoma a mensalidade. Essa várivel multiplica o valor da mão de obra pelo valor de quantos arduinos o cliente irá utilizar, para definir o valor da mensalidade.   
    div_vinho.innerHTML = `Potencialmente, você perde por mês <i>R$ ${perdas.toFixed(2)}</i> do seu estoque.<br> 
E seu investimento inicial para adquirir nossa solução (instalação e manutenção) será de <i>R$ ${preco.toFixed(2)}</i>, e a partir do segundo mês um valor de <i>R$ ${gasto.toFixed(2)}</i> mensais.</h3>`; // As chaves são para chamar as variáveis e exibir o seu valor. 

}