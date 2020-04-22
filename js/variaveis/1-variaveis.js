var test = 'example';
(() => {
    console.log(`Valor dentro da função ${test}`);

    if (true) {
        var test = 'valor if';
        console.log(`Valor dentro do if ${test}`);
        //Variáveis do tipo var não respeitam escopo de bloco
    }

    console.log(`Valor após o if ${test}`);
})();