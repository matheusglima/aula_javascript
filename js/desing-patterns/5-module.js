/*Module - É um pattern que possibilita que organizemos melhor o nosso código, sem a
necessidade de expor variáveis globais*/
let name = 'default';

function getName() {
    return name;
}

function setName(NewName) {
    name = NewName;
}

module.exports = {
    getName,
    setName
}
