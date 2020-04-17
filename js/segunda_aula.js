

function botao() {
    document.getElementById("click").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById('click'));
    //alert('Obrigado por clicar');
}

function Redirecionar() {
    window.open('https://www.facebook.com/');
    //window.location.href = 'https://www.facebook.com/';
}

function trocar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Obrigado por passar o mouse';
    elemento.innerHTML = 'Obrigado por passar o mouse';
}

function voltar(elemento) {
    //document.getElementById('mouseover').innerHTML = 'Passe o mouse aqui';
    elemento.innerHTML = 'Passe o mouse aqui';
}

function load() {
    alert('Página carregada');
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}
/*Object create
var Animal = {
    tipo: 'mamífero',
    qualTipo: function () {
        console.log(this.tipo);
    }
}

var baleia = Object.create(Animal);
baleia.qualTipo();

var cavalo = Object.create(Animal);
cavalo.tipo = 'cavalo';
cavalo.qualTipo();

//Object Construction
function meuMetodo() {
    var resultado = `Meu nome é ${this.nome}`;
    console.log(resultado);
}
function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.meuMetodo = meuMetodo;
}

var Matheus = new Pessoa('Matheus', 21, 'M');
console.log(Matheus);
Matheus.meuMetodo();

//Incrementeando uma propriedade ao objeto;
Pessoa.prototype.nascimento = null;
Matheus.nascimento = '07 de maio de 1998';
console.log(Matheus);

//Object Date
var today = new Date();
console.log(`Dia: ${today.getDate()}`);

meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
for (var i=0; i <meses.length; i++) {
    var m = today.getMonth();
    if (i === m) {
        console.log(`Mês: ${meses[i]}`);
    }
}
console.log(`Ano: ${today.getFullYear()}`); */