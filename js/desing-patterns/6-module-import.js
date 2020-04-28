/*const getName = require('./5-module');
const setName = require('./5-module');*/
//ou
const {getName, setName} = require('./5-module');
console.log(getName()); //"default"

setName('Matheus Lima');
console.log(getName()); //"Matheus Lima"

