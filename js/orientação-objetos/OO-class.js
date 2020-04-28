class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = qtdePatas;
    }
    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4); //É usado para importar as propriedades e métodos da superclasse Animal   
        this.morde = morde;
    }

    latir () {
        console.log('Au Au!');
    }
}

var pug = new Cachorro(false);
var bulldog = new Cachorro(!true);
bulldog.movimentar = () => {
    return "movimentar";
}

console.log(bulldog.movimentar());
bulldog.latir();
console.log(pug);
console.log(bulldog);
