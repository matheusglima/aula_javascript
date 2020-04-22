//currying - concentrar N parâmetros em um só
//implementando o currying
function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

//Mais um exemplo de como implementar o Currying
function multiplica(x) {
    return function(y) {
        return x * y;
    }
}

const multiplica3 = multiplica(3);

console.log(multiplica3(2));
console.log(multiplica3(3));
console.log(multiplica3(4));
console.log(multiplica3(5));