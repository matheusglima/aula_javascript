function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        console.log(name);
    }

    this.setName = function (newName) {
        name = newName;
    }

    Person.walk = function() {
        console.log("Walking...");
    }
}

const p = new Person('Matheus');

console.log(p);//getName:[Function], setName:[Function]
p.getName(); //'Matheus
console.log(Person.walk());

p.setName('gui');
p.getName();//"gui"

//Versão 12 do Javascript
class Person {
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    static walk() {
        console.log('Walking...');//Static possilita acessar métodos/atributos sem instaciar
    }
} 

const p = new Person('Matheus');

//console.log(p.getName());
console.log(Person.walk());

//p.setName('Lucas');
//console.log(p.getName()); //"Lucas"
