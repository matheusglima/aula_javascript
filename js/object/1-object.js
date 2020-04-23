let user = {
    name: 'Matheus'
};

console.log(user.name);

//Alterando o valor atribuido a propiedade "name"
user.name = 'Outro nome';
console.log(user.name);
user['name'] = 'Outro nome 2';
console.log(user.name);

const prop = 'name';
user[prop] = 'Outro nome 3';

console.log(user.name);

//Criando uma propriedade
user.lastName = 'Lima';
console.log(user);
console.log(user.lastName);

//Deletendo uma propriedade do objeto
delete user.name;
console.log(user);
