const texto = 'Matheus';

//Retorna a quantidade de strings que há na variável
const textSize = texto.length;
console.log('Quantidade de letras:',textSize);

//Retorna um array quebrando a string por um delimitador    
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:',splittedText);

//Busca por um valor e substitui
const replacedBrasil= 'O Brasil é um país lindo'.replace('Brasil', 'Uruguai');
console.log('\nSubstituição de valor:',replacedBrasil);

//Retorna "fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:' ,allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da segunda string até a última:' ,secondToEnd);

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);

//