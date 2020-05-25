/*const users = ['Matheus', 'Lucas', 'Isa'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const peoples = [
    {
        name: 'Matheus',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Lucas', 
        age: 20,
        gender: gender.MAN
    }, 
    {
        name: 'Isa', 
        age: 31,
        gender: gender.WOMAN
    }
];

//Retorna quantidade de itens do Array
console.log('Quantidade de itens:', peoples.length);

//Retorna uma propiedade do objeto dentro do Array
console.log('Nome:', peoples[2].name);
console.log('Idade:', peoples[2].age);
console.log('Sexo:', peoples[2].gender);

//Verificar se é array
console.log('Verifica se é Array:', Array.isArray(peoples));

//Iterar itens do array
peoples.forEach((peoples, index, arr) => {
    console.log(`Nomes/Index/Array: ${peoples.name} index: ${index}`, arr);
});

//Filtrar itens do Array
const womans = peoples.filter(peoples => peoples.gender === gender.WOMAN);
console.log('\nLista de mulheres:',womans);

//Retornar um novo Array
//Nunca se deve modificar a referência do objeto original
const peoplesCourse = peoples.map((peoples) => {
    peoples.course = 'Introdução ao Javascript';
    return peoples;
});

console.log('Novo objeto:', peoplesCourse);

//Modifica course em cada objeto
const modifyObject = Object.assign({}, peoples[0], {course: 'Python'});
console.log('New:', modifyObject);

//Transformar um array em outro tipo
const totalAge = peoples.reduce((age, peoples) => {
    age += peoples.age;
    return age;
}, 0); //int age = 0;

console.log('\nTotal anos de idade:', totalAge);

//Retorna soma de idades par
const totalAgePair = peoples.filter(peoples => peoples.age % 2 === 0)
                            .reduce((age, peoples) => {
                                age += peoples.age;
                                return age;
                            }, 0);

console.log(`Total de idades em par: ${totalAgePair}`);

//Retorna total de strings das propiedades "name" do objeto "peoples"
//O primeiro parâmetro do reduce retorna o tipo que será retornado
const totalLength = peoples.reduce((len, peoples) => {
    len += peoples.name.length;
    return len;
},0);

console.log('Total de letras:', totalLength);
console.log(typeof(totalLength));

const mod = peoples.map((peoples) => {
    peoples.year = 2020;
    return peoples;
});

console.log('Objeto: ', mod);
*/

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const users = [
    {
        name: 'Matheus',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Isa',
        age: 25,
        gender: gender.WOMAN
    }, 
    {
        name: 'João',
        age: 28,
        gender: gender.MAN
    }
];


const totalAge = users.reduce((age, users) => {
    age += users.age;
    return age;
}, 0);

console.log(`Soma das idades: ${totalAge}`);

const totalLength = users.reduce((len, users) => {
    len += users.name.length;
    return len;
}, 0);

const totalAgePair = users.filter(user => user.age % 2 === 0)
                            .reduce((pair, users) => {
                                pair += users.age;
                                return pair;
                            }, 0); //init pair = 0;

console.log(`Total idades pares: ${totalAgePair}`);
console.log(`Total de letras: ${totalLength}`);
