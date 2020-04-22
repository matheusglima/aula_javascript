(() => {
    const test = 'valor funcao';
    console.log(`Valor dentro da funcao ${test}`);

    if(true) {
        const test = 'Valor if';
        console.log(`Valor dentro do if ${test}`);
        //Variáveis do tipo const respeitam escopo de bloco
    }

    console.log(`Valor depois do if ${test}`);
})();