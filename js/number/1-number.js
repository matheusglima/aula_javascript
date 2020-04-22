const myNumber = 10182.1231;

//Transformar número para String
const numberAsString = myNumber.toString();
console.log('Número para String:',numberAsString);
console.log('Tipo:', typeof(numberAsString));

//Retorna um número com o número de casas decimais
const numberToFixed = myNumber.toFixed(2);
console.log('Número com duas casas decimais:',numberToFixed);

//Transformar float em int
const numberAsInt = parseInt(myNumber);
console.log('Float parseada para Int:', numberAsInt);

//Transforma uma string em float
const numberAsFloat = parseFloat(numberAsString);
console.log('String parseada para Float:',numberAsFloat);

//Transforma uma string em int
const numberAsStringInt = parseInt(numberAsString);
console.log('String parseada para Int:',numberAsStringInt);

