//Hoisting
//Há dois tipos de hoisting - VARIÁVEIS E FUNÇÕES;
//O hoisting de variável eleva a criação da variável e não a sua atribuição;
function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

/*
function fn() {
    var text;

    console.log(text);

    text = 'Exemplo';

    console.log(text);
} */