//Função construtora de Objetos
function Fifa(team, country, year) {
    this.team = team;
    this.country = country;
    this.year = year;
}

var team1 = new Fifa('Botafogo', 'Brasil', 1910);
console.log(team1.team);

//Definindo propriedades de um tipo de objeto
Fifa.prototype.city = null;
team1.city = 'Rio de Janeiro';
console.log(team1.city);

 //Usando o método Object.create
var Animal = {
    name: 'Noah',
    especie: 'Cachorro',
    propriedades: function() {
        console.log(this.name);
        console.log(this.especie);
    }
}

var animal1 = Object.create(Animal);
animal1.propriedades();

var animal2 = Object.create(Animal);
animal1.name = 'Snoop';
animal1.propriedades()

//Definindo um método
function Carro(ano, fabricacao, modelo) {
    this.ano = ano;
    this.fabricacao = fabricacao;
    this.modelo = modelo;
    this.mostreCarro = mostreCarro;
}

var carro1 = new Carro(2019, 2018, 'FordKa');

function mostreCarro() {
    var resultado = "um belo " + this.ano + " " + this.fabricacao + " "
    + this.modelo;
    console.log(resultado);
}

carro1.mostreCarro();


//Usando Switch
var tipoFruta = 'Laranja';

switch (tipoFruta) {
    case 'Laranja':
        console.log(`A fruta é ${tipoFruta}`);
        break;
    case 'Abacate':
        console.log(`A fruta é ${tipoFruta}`);
        break;
    default:
        console.log('Não temos essa fruta');
}
