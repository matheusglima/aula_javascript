//Diferença entre ArrowFunction e Função Normal
//Função normal quando executada de dentro de um objeto, retrona prop do objeto
//Arrow Function não retorna prop do objeto
(() => {
    this.name = 'Arrow function';
    const getArrowName = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Matheus',
        getArrowName,
        getName,
    }

    console.log(user.getArrowName()); //Retorna name local, que não é do objeto
    console.log(user.getName()); //Retorna name do objeto
})();