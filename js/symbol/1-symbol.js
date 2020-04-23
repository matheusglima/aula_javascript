const symbol1 = Symbol();
const symbol2 = Symbol();

//Cada symbol é único
console.log('\nVerifica se os symbol são idênticos:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Matheus',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Guimarães de Lima'
}

console.log(user);//Habilita uma forma com que as propriedades não sejam sob escritas

//Symbols criam propriedades que não são enumerables
for(key in user) {
    if(user.hasOwnProperty(key)) {
        console.log(`\nValor da chave: ${key}: ${user[key]}`);
    }
}

console.log('\nPropriedades do Objeto user', Object.keys(user));
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user:', Object.getOwnPropertySymbols(user));  

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user:', Reflect.ownKeys(user));

//Criar um enum
const directions = {
    UP: Symbol('UP'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT'),
    DOWN: Symbol('DOWN')
}