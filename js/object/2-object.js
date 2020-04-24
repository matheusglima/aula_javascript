const user = {
    name: 'Matheus',
    lastName: 'Guimarães de Lima'
}

//Recupera as chaves do objeto
console.log('\nChaves do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
//console.log('\nValores da chave do objeto user:', Object.values(user));

//Retorna array de arrays [nome_propriedade, valor_propiedade]
//console.log('\nLista de propriedades e valores:', Object.entries(user));

//Mergear propiedades do objeto
Object.assign(user, {fullName: 'Matheus Guimarães de Lima'});

console.log('\nAdiciona a propriedade fullname no objeto user:', user);
console.log('\nRetorna um objeto mergeando dois ou mais objetos:', Object.assign({}, user, {age: 26}));

console.log(user);

//Previne todas as alterações em um objeto
const newObj = {
    foo: 'bar'
}

Object.freeze(newObj); //Congela todas as alterações nas propiedades do objeto

newObj.foo = 'changes'; 
delete newObj.foo;

console.log('\nVariável newObj após alterações:',newObj);

//Permite apenas a alteração de propiedades existentes de um objeto
const person = {
    name: 'Flutter'
}

Object.seal(person); //O object seal não permite a exclusão e nem a criação de propriedades no obj
person.name = 'ReactNative';
delete person.name;
person.age = 20;

console.log('\nVariável person após o uso do Object.seal:', person);