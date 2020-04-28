/*Singleton - O objetivo dessa pattern é criar uma única instância de um função construtora
e retorná-la toda vez que for necessário utilizá-la*/

function Pessoa () {
    if(!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({name: 'Matheus'});
const p2 = Pessoa.call({name: 'Isabela' });

console.log(p);
console.log(p2);