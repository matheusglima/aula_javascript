const array = [0,1,2,3,4,5,6];

array.forEach((search) => {
    if(search % 2 === 0) {
        console.log(`Número ${search} é par`);
    } else {
        console.log(`Número ${search} é ímpar`);
    }
})