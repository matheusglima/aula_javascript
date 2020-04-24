//Spread
teste = ['cabeça', 'olhos'];
partes = ['pé', ...teste, 'mãos', 'dedos'];

//console.log(`Algumas partes do corpo humano: ${partes}`);

const user = [
    {
        name: 'Matheus',
        lastName: 'Lima',
        age: 20
    },
    {
        name: 'Isa',
        lastName: 'Andrade',
        age: 19
    }
];

function fn() {
    return {
        ...user,
        fullName: `${user[1].name} ${user[1].lastName}`
    }
}

//Modo comum 
function fn1(x, y, z, w) { 
    return {
        x,
        y,
        z,
        w
    }
}

var args = [0, 1, 2, 10];
console.log(fn1(...args));

//Modo Arrow function
const arrowfn = () => {
    return args;
}
console.log('Args:',arrowfn());