//Função Construtora
function Animal(tipo, cor) {
    this.qtdePatas = 4;
    this.tipo = tipo;
    this.cor = cor;
}

function Cachorro(morde) {
    Animal.call(this, 'Mamífero', 'Branco');
    this.morde = morde;
}




var pug = new Cachorro(false);
var pastorAlemao = new Cachorro(true);

Cachorro.prototype.faro = null;
pastorAlemao.faro = 'Apurado';

pastorAlemao.cor = 'Preto';

console.log(pug);
console.log(pastorAlemao);


//Object.create
/*var Animal = {
    tipo: 'Mamífero',
    qualTipo: function () {
        console.log(this.tipo);
    }
}

var Cachorro = Object.create(Animal);
Cachorro.qualTipo();

var Jacaré = Object.create(Animal);
Jacaré.tipo = 'Réptil';
Jacaré.qualTipo();*/