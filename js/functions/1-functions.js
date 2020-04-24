function fn() {
    return 'I am Dev!';
}

//console.log(fn());

const arrowFn = () => 'Code here'; // Functions e Arrays também são objetos
console.log(arrowFn()); //Retorna Code here

const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here';
}

//Funções também são objetos isa é muito gata 
fn.prop = 'Posso criar propriedades';
console.log(fn());
console.log(fn.prop);
console.log(Object.keys(fn));

//Receber parâmetros
const logValue = value => console.log(value);
//const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if(allowed) {
        fnParam();
    }
}

const handleFnExec = controlFnExec(fn);

handleFnExec(true); //Executará a função fn
handleFnExec(); //Não executará a função fn

//controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if(allowed) {
            fnParam();
        }
    }
}