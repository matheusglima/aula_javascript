/*Oberver - É um pattern muito popular em Javascript. A instância (subscriber) mantém uma
coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado*/

    class Obervable {
        constructor () {
            this.observables = []
        }

        subscribe (fn) {
            this.observables.push(fn);
        }

        notify(data) {
            this.observables.forEach(fn => fn(data));
        }

        unsubscribe(fn) {
            this.observables = this.observables.filter(obs => obs !== fn);
        }
    }

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

const o = new Obervable();

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');