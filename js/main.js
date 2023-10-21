console.log('Main JS loaded');

/*
The battlefield is a scene of constant chaos. 
The winner will be the one who controls that chaos, both his own and the enemies.
- Napoleon Bonaparte
*/
const btnStartGame = document.querySelector('.btn-startgame');
const imageHolder = document.querySelector('.hp-bg-image');
const titleHolder = document.querySelector('.title-holder');
const textHolder = document.querySelector('.text-holder');
const btnHolder = document.querySelector('.btn-holder');
const backgrounds = [
    ['text-griff-gold','bg-griff-dark-red'],
    ['text-slith-light-silver','bg-slith-dark-green'],
    ['text-raven-grey','bg-raven-dark-blue'],
    ['text-huffle-canary','bg-huffle-dark-brown'],
];
const modalColours = [
    ['bg-griff-gold','text-griff-dark-red'],
    ['bg-slith-dark-green','text-slith-light-silver'],
    ['bg-raven-grey','text-raven-dark-blue'],
    ['bg-huffle-light-brown','text-huffle-canary'],
];
const q2a = [5,4,7,9,0,'a','n'];
const answers = [
    ['st pancras station', 'st.pancras station', 'st. pancras station'],
    '','','','',
    '32154',
    '','',''
];
const theModal = new bootstrap.Modal(document.querySelector('.main-modal'));

// To let or not to let, that is the question... (Not William Shakespear)
let backgroundIndex = -1, oldBackgroundIndex = -1, debug = false;

if (btnStartGame)
    btnStartGame.addEventListener('click', firstClick);

//Orignal important functions ;-) 
function firstClick() {
    const newBtn = alterThePage(pageOneData);

    //New button - new click event ;-)
    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-one-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer(5, answer);
        if (!result) {
            alterAndShowModal('Sadly, incorrect...', addParagraph('I do am so sorry, but that answer is not correct...'));
            return;
        } 

        secondPuzzle();
    });
}

function secondPuzzle() {
    alterAndShowModal('Wh00p!', addParagraph(`That is correct, please remember the following: A = 6`));
    const newBtn = alterThePage(pageTwoData);

    //New button - new click event ;-)
    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-two-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer('a', answer);
        if (!result) {
            alterAndShowModal('Sadly, incorrect...', addParagraph('I do am so sorry, but that answer is not correct...'));
            return;
        } 

        thirdPuzzle();
    });
}

function thirdPuzzle() {
    const newBtn = alterThePage(pageThreeData);
    alterAndShowModal(
        'Again, you hit the spot!', 
        addParagraph(`Your journey continues... Please remember B = 8`)
    );

}

//Let's start the game (just change a background ;-)
changeBackground();

//Cheating options
debug = true;
thirdPuzzle();