//hoisting de funcoes
function fn() {
    function log(value) { //É uma boa prática sempre declarar a função antes de usar
        console.log(value);
    }

    log('Hoisting de funcoes'); 
}

fn(); 