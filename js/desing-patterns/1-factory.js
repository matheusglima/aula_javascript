/*Definição design patterns - Design Patterns ou padrões de projetos são soluções generalistas
para problemas recorrentes durante um projeto de desenvolvimento de um software. Não se trata
de um framework ou um código pronto, mas de uma definição de alto nível de como um problema 
comum pode ser solucionado.

Factory: Todas as funcões que retornam um objeto, sem a necessidade de chamá-las com o new,
são consideradas funções Factory(fábrica)*/

function FakeUser(name) {
    return {
        name,
        lastName: 'Lima'
    }
}

const p = FakeUser('Matheus'); //É Factory pois não usa o "new" para instaciar o objeto
console.log(p);

function User(customProperties) {
    return {
        name: 'Matheus',
        lastName: 'Andrade',
        ...customProperties //Permite criar/sobescrever propriedades do objeto
    }
}

const person = User({name: 'Isa', age: 19, nacionalidade: 'Brasileira'});
console.log(person);
