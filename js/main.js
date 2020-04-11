/*var corretora = {
    name :'XP Investimentos',
    country: 'Brasil',
    whatCorretora: function() {
        console.log(this.name);
        console.log(this.country);
    }
}

function myBank() {
    var result = 'Meu banco é o ' + this.name;
    console.log(result);
}

function bankS(name, type, country) {
    this.name =  name;
    this.type = type;
    this.country = country;
    this.myBank = myBank;
}

var itau = new bankS('Itaú', 'Tradicional/Investimento', 'Brasil');
var banco_do_brasil = new bankS('Banco do Brasil', 'Tradional', 'Brasil');
var morganStanley = new bankS('Morgan Stanley', 'Investimento', 'Estados Unidos');

console.log(itau.name);
console.log(banco_do_brasil.name);

bankS.prototype.cor = null;
itau.cor = 'laranja com azul';

console.log(itau.cor);
itau.myBank();
morganStanley.myBank();

var xp = Object.create(corretora);
xp.whatCorretora();

var ryco = Object.create(corretora);
ryco.name = 'Ryco Investimentos';
ryco.country = null;
ryco.whatCorretora();


var frase = 'Japão é o melhor time do mundo!';
console.log(frase.replace('Japão', 'Brasil'));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

*/
//Aprendendo Arrays
frutas = ['maçã', 'pêra', 'limão'];
console.log(frutas);

frutas.push('Manga');
console.log(frutas);

frutas.pop();
console.log(frutas);

delete frutas[0];
frutas[0] = 'Abacaxi';

console.log(frutas.reverse()); //Parei no minuto 2:18

//Objeto Number
var maiorNum = Number.MAX_VALUE;
var menorNum = Number.MIN_VALUE;
var infityNeg = Number.NEGATIVE_INFINITY;
var infityPos = Number.POSITIVE_INFINITY;

console.log(maiorNum);
console.log(menorNum);
console.log(infityNeg);
console.log(infityPos);

//Transformando String para números inteiros e float;
var num = '21.43';
console.log(num);
console.log(Number.parseInt(num));
console.log(Number.parseFloat(num));

//Utilizando o método Number.prototype
var x = '30.12';
console.log(Number.prototype.toExponential(x)); 
console.log(Number.prototype.toFixed(x));
console.log(Number.prototype.toPrecision(x));

//Object Math
console.log(Math.PI);
console.log(Math.pow(2, 3));
var y = Math.random();
console.log(y);

var cosseno = Math.cos(2);
console.log(cosseno);


