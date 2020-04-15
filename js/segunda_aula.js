//Object Date
var today = new Date();
alert(today);
alert(today.getHours());
alert(today.getMonth() + 1);
alert(`Minutos: ${today.getMinutes()}`);

//Condicionais
var idade = prompt('Qual sua idade?');
if (idade >=18) {
    alert('adulto');
} else {
    alert('Menor de idade');
} 

//Laços
var count = 20;
while (count >= 0) {
    console.log(count);
    count--;
}

lista = ['Java', 'React', 'Flutter', 'Express'];
for (var j = 0; j < lista.length; j++) {
    console.log(lista[j]);

}