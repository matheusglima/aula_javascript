//Break
console.log('Exemplo utilização do break');

let index = 0;
while(true) {
    index++;

    if(index > 5) {
        console.log(`Parou no ${index}`);
        break;
    }
    console.log(index);
}

//Continue
console.log('Exemplo p/ utilização do continue');

const array = [1, 2, 3, 412, 43];

for(let i= 0; i<array.length; i++) {
    const element = array[i];

    if(element % 2 === 1) {
        continue;
    }
    console.log(`Números: ${element}`);
}