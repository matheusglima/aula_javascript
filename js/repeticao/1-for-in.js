let arr = [0, 2, 4];
arr.foo = "hello";

for(let i in arr) {
    console.log(i); //Retorna 0,1,2,foo
}

for(let i of arr) {
    console.log(i); //Retorna 0,2,4
}