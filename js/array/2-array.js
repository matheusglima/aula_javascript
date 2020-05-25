//Utilizando Array.of
const persons = Array.of('Matheus', 'Noah', 'John'); //Funcção.of - Transforma params em Array
console.log(persons);


const StringandNumbers = Array.of('Matheus', 'Noah', 1, 2, 3);
console.log(StringandNumbers);


const With3Position = Array(3); //Cria um Array vazio com n posições
console.log(With3Position);


const NumberList = Array(3, 2); //Cria um array com os parâmetros inseridos;
console.log(NumberList);

/*const divs = document.querySelectorAll('div'); //Busca na pág todos 'divs' em NodeList
const fromArray = Array.from(divs); //Busca os elementos com métodos Array
console.log(fromArray.pop);
*/

const frutas = ['Melancia', 'Laranja'];

frutas.push('Banana'); //Adiciona um novo elemento na última posição do Array
console.log(frutas);

frutas.pop(); //Elimina o elemento da última posição e retona 
console.log(frutas);

frutas.shift() //Elimina o elemento da primeira posição e retorna
console.log(frutas);

frutas.unshift('Abacate'); //Adiciona o elemento na primeira posição do Array
console.log(frutas);

//Utilizando Concat
const salgados = ['Coxinha', 'Empada', 'Pastel', 'Kibe'];

const alimentos = frutas.concat(salgados); //Concatena dois Arrays diferentes
console.log(alimentos);

//Utilizando slice
const arr = [1, 2, 7, 6, 34];

console.log(arr.slice(0, 2)); //Retorna [1, 2]
console.log(arr.slice(1, 4)); //Retorna [2, 7, 6]
console.log(arr.slice(2)); //Retorna [7, 6, 34] --Retorna a partir da posição 2
console.log(arr.slice(-1)); //Retorna [34] -- Retorna o último elemento do array
console.log(arr.slice(-2)); // Retorna [6, 34] --Retorna a posição 2 a partir do último elemento

//Utilizando splice
const games = ['CS', 'Halo', 'CallOfDuty', 'GTA V'];

games.splice(1, 0, 'Fifa 20'); //Adiciona "Fifa 20" após a posição 1 do Array
console.log(games); // 0 indica que nenhum elemento será excluído

games.splice(3); //Exclui todos os elementos maior ou igual a posição 2
console.log(games);

games.splice(1, 1, 'GTA V', 'Dirt Rally'); // A partir da pos 1 exclui 1 elemento e substitui
console.log(games);

games.splice(0, 2, 'Fifa 20'); // A partir da pos 0 exclui 2 elementos e substitui por "Fifa 20"
console.log(games);


