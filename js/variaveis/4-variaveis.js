/*const name = 'Matheus';

//Não podemos alterar o valor
name = 'Matheus';

const user = {
    name: 'Matheus'
};

//Podemos alterar o valor do atributo do objeto
user.name = 'Outro nome';

//Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Matheus'
}; */

const persons = ['Matheus', 'Lucas', 'Marcos'];

//Podemos adicionar novos itens
persons.push('João');
console.log(persons); //['Matheus', 'Lucas', 'Marcos', 'João']

//Podemos excluir itens
persons.shift(); //Exclui o primeiro item do Array
//['Lucas', 'Marcos', 'João']
console.log(persons);
persons.pop(); //Exclui o último item do Array
//['Lucas', 'Marcos']
console.log(persons);

//Podemos alterar diretamente
persons[1] = 'Vicente';
//['Lucas', 'Vicente']
//Imprime tudo
console.log(`Array depois das alterações ${persons}`);

const user = {
    name: 'José'
};

console.log(user); //Imprime o objeto

user.name = 'Manuzita';
console.log(user.name); //Imprime a alteração do valor atribuido a propriedade do objeto

var t = 21;
console.log(t);
t = 'texto';
console.log(t);
console.log(typeof(t));