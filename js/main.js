console.log('Main JS loaded');

/*
The battlefield is a scene of constant chaos. 
The winner will be the one who controls that chaos, both his own and the enemies.
- Napoleon Bonaparte
*/
const btnStartGame = document.querySelector('.btn-startgame');
const mainMask = document.querySelector('.hp-mask');
const theClickables = document.querySelector('.the-clickables')
const imageHolder = document.querySelector('.hp-bg-image');
const titleHolder = document.querySelector('.title-holder');
const textHolder = document.querySelector('.text-holder');
const btnHolder = document.querySelector('.btn-holder');
const theModal = new bootstrap.Modal(document.querySelector('.main-modal'));
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
const q2a = [5,4,7,9,0,'a','n','','trap'];
const answers = [
    ['st pancras station', 'st.pancras station', 'st. pancras station'],
    '','','crisps','',
    '32154',
    '','','4174'
];

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

    //New button - new click event ;-)
    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-three-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer(9, answer);
        if (!result) {
            alterAndShowModal(
                'That is ........ incorrect :-(', 
                addParagraph('That is, sadly to say, not what we are looking for.... Think again and think hard, and do not forget to think British not American...'));
            return;
        } 

        fourthPuzzle();
    });
}

function fourthPuzzle() {
    const newBtn = alterThePage(pageFourData);
    alterAndShowModal(
        'Ow my, you are on a winning streak!', 
        addParagraph(`But sadly, still no Trevor...  Please remember C = 77`)
    );

    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-four-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer('trap', answer);

        if (!result) {
            alterAndShowModal(
                'D0h! That is not correct :-(', 
                addParagraph('Reckon you need more time with professor Wagenaar for math.. We will sign you up..'));
            return;
        } 

        fifthPuzzle();
    });
}

function fifthPuzzle() {
    const newBtn = alterThePage(pageFiveData);
    newBtn.addEventListener('click', function() {
        showMainHall();
    });
}

const clickableClasses = ['great-hall', 'fireplace'];
function changeClickable(className) {
    for (let i = 0; i < clickableClasses.length; i++) {
        imageHolder.classList.remove(clickableClasses[i]);
    }

    imageHolder.classList.add(className);
}

function showMainHall() {
    changeClickable('great-hall');
    mainMask.classList.add('hidden');
    theClickables.classList.remove('hidden');
    theClickables.innerHTML = '';

    const firePlace = document.createElement('div');
    firePlace.classList.add('click-fireplace');
    firePlace.addEventListener('click', function() {
        showFireplace();
    });
    const mainDoor = document.createElement('div');
    mainDoor.classList.add('click-main-door');
    mainDoor.addEventListener('click', function() {
        alterAndShowModal(
            'The main door...', 
            addParagraph('Filtch has already locked the main door, this is not the way out...'));
    });
    theClickables.appendChild(firePlace);
    theClickables.appendChild(mainDoor);
}

function showFireplace() {
    changeClickable('fireplace');
    mainMask.classList.add('hidden');
    theClickables.classList.remove('hidden');
    theClickables.innerHTML = '';
    
    const goBack = document.createElement('div');
    goBack.classList.add('click-goback');
    goBack.innerHTML = '&lt;';
    goBack.addEventListener('click', function() {
        showMainHall();
    });
    
    theClickables.appendChild(goBack);
}
//Let's start the game (just change a background ;-)
changeBackground();
imageHolder.classList.add('privet');

//Cheating options
debug = true;
alterThePage(pageFiveData);
showMainHall();