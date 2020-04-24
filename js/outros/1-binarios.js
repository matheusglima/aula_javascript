var arvores = new Array('pau-brasil', 'cedro', 'loureiro', 'carvalho');

0 in arvores; //Retorna true
1 in arvores; //Retorna true
"cedro" in arvores; //Retorna false
console.log('cedro' in arvores); //Retorna true, pois indica a posição

//Objetos personalizados
var meuCarro = {marca: 'Honda', modelo: 'Civic', ano: 2012};
console.log("marca" in meuCarro); //Retorna True
console.log("modelo" in meuCarro); //Retorna True

//instaceof
objeto instanceof tipoObjeto
var dia = new Date();

if(dia instanceof Date) {
    
}