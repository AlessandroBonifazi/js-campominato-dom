// Debug
console.log('JS OK!');

/*
Viene generata una griglia di gioco quadrata nel range 1-100.
Il computer deve generare 16 numeri casuali nello stesso range 
della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati 
 - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
altrimenti la cella cliccata si colora di azzurro e l'utente 
può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o 
raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

BONUS:
1- quando si clicca su una bomba e finisce la partita, 
   evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, 
   il software scopre tutte le bombe nascoste
3- L'utente indica un livello di difficoltà in base al quale 
   viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero 
   tra quelli compresi in un range:
   con difficoltà 1 => tra 1 e 100
   con difficoltà 2 => tra 1 e 81
   con difficoltà 3 => tra 1 e 49
*/

// Functions
function createElementsInGrid(totalCells, levelClass) {
    const grid = document.getElementById('grid');
    // reset
    grid.innerHTML = '';
    // 2. add totalCells div
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        // add class
        cell.className = 'cell';
        cell.classList.add(levelClass);
        // add inner text
        cell.innerText = (i + 1);
        cell.id = i + 1;
        // add cell to div  
        grid.appendChild(cell);
    }
}

function generateRandomNumber(min, max) {
    const range = max - min + 1
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber
}

function generateBombs(max) {
    const bombPositions = [];
    while (bombPositions.length < 16) {
        const number = generateRandomNumber(1, max);
        if (!bombPositions.includes(number)) {
            bombPositions.push(number);
        }
    }
    return bombPositions;
}

function startgame(totalCells) {
    // call function
    const bombPosition = generateBombs(totalCells);
    // check for bombs
    for (let i = 1; i <= totalCells; i++) {
        const cell = document.getElementById(i);
        cell.addEventListener('click', function () {
            const isBomb = bombPosition.includes(i);
            if (isBomb) {
                cell.classList.add('bg-red');
                result.innerText = "You Found a Bomb!";
                grid.classList.add('no-click');
                for (let i = 0; i < bombPosition.length; i++) {
                    const allBombs = 'cell-' + bombPosition[i];
                    console.log(allBombs);
                }
            } else {
                cell.classList.add('bg-blue');
            }
        })
    }
}

// Config
const buttonEasy = document.getElementById('easy');
const buttonMedium = document.getElementById('medium');
const buttonHard = document.getElementById('hard');
let result = document.getElementById('result');

buttonEasy.addEventListener('click', () => {
    createElementsInGrid(100, 'easy');
    startgame(100);
});
buttonMedium.addEventListener('click', () => {
    createElementsInGrid(81, 'medium');
    startgame(81);
});
buttonHard.addEventListener('click', () => {
    createElementsInGrid(49, 'hard');
    startgame(49);
});













