

//Object Date
var today = new Date();
alert(today);
alert(today.getHours());
alert(today.getMonth() + 1);
alert(`Minutos: ${today.getMinutes()}`);

//Condicionais
/*var idade = prompt('Qual sua idade?');
if (idade >=18) {
    alert('adulto');
} else {
    alert('Menor de idade');
} */

/*var count = 20;
while (count >= 0) {
    console.log(count);
    count--;
}*/

/*lista = ['Java', 'React', 'Flutter', 'Express'];
for (var j = 0; j < lista.length; j++) {
    console.log(lista[j]);

}*/


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
/*frutas = ['maçã', 'pêra', 'limão'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas.toString()[0]);
console.log(frutas.join(' -- '));
*/

//var cor = 'verde';
//var fruta = {nome: 'maçã', cor: cor};
//console.log(fruta);
//console.log(fruta.cor);
//alert(fruta.nome);

//Dicionário em lista
//var fruta = [{nome: 'maçã', cor: 'verde'}, {nome:'uva', cor:'verde'}];
//console.log(fruta[0].nome);
//console.log(`A fruta é ${fruta[1].nome}`);




