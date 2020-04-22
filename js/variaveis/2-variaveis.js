(() => {
    let test = 'valor funcao';
    console.log(`Valor dentro da funcao ${test}`);

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if ${test}`);
        //Variáveis do tipo let, respeitam o escopo de bloco
    }

    console.log(`Valor depois do if ${test}`);
})();