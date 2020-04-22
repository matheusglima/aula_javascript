/*function getName() {
    return 'Matheus e Silva Guimarães de Lima';
}

function logFn(fn) {
    console.log(fn());
}

logFn(getName);
*/

console.log('Node rodando com sucesso no TERMINAL!');
//função transfomada em método
function myTeam() {
    var frase = 'Meu time é o ' + this.nome;
    console.log(frase);
}

//função construtora
function team(nome, cores) {
    this.nome = nome;
    this.cores = cores;
    this.myTeam = myTeam;
}

var Botafogo = new team('Botafogo', 'Branco e preto');
console.log(Botafogo.nome);

//Objeto criado com Object.create()
var Animal = {
    tipo: 'mamífero',
    qualTipo: function() {
        console.log(this.tipo);
    }
}

var baleia = Object.create(Animal);
baleia.qualTipo();

var lobo = Object.create(Animal);
lobo.tipo = 'null';
lobo.qualTipo();

Botafogo.myTeam();
