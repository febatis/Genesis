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
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
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

    console.log(color); //Debugger

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//funcao que retorna a cor
let createColorElement = (color) => {
    // if (color == 0) {
    //     return blue;
    // } else if (color == 1) {
    //     return green;
    // } else if (color == 2) {
    //     return red;
    // } else if (color == 3) {
    //     return yellow;
    // }
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

//funcao iniciar jogo
let playGame = () => {
    score = 0;
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    
    nextLevel();
}

// blue.addEventListener('click', click(0));
// green.addEventListener('click', click(1));
// red.addEventListener('click', click(2));
// yellow.addEventListener('click', click(3));

playGame();