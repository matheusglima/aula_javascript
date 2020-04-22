/*const user = {
    name: 'Matheus',
    lastName: 'e Silva Guimarães de Lima'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);
*/
//Exemplo 2
const Pessoas = {
    nome: 'Isabela',
    ultimoNome: 'de Andrade Marques'
}

function retornaNomeCompleto(Pessoas) {
    return {
        ...Pessoas,
        nomeCompleto: `${Pessoas.nome} ${Pessoas.ultimoNome}`
    }
}

const novoObjeto = retornaNomeCompleto(Pessoas);

console.log(novoObjeto);