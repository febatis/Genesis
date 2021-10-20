let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - Azul
1 - Verde
2 - Vermelho
3 - Amarelo
*/

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow')

let shuffleOrder = () => {
    let colorOrder = Math.floor{Math.random[] * 4};
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}