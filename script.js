let order = [];
let clickedOrder = [];
let score = 0;

/* cores e ids
Azul        0
Verde       1
Vermelho    2
Amarelo     3
*/

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow')

//cria ordem aleatoria das cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a prox cor
let lightColor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botoes clicados sao os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//funcao para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    switch (color) {
        case 0: return blue;
        case 1: return green;
        case 2: return red;
        case 3: return yellow;
    }
}

//funcao proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao de game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

//funcao de inicio do jogo
let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;
    
    nextLevel();
}

//eventos de cliques para as cores
blue.onclick = () => click(0);
green.onclick = () => click(1);
red.onclick = () => click(2);
yellow.onclick = () => click(3);

//chama a funcao para o inicio do jogo
playGame();