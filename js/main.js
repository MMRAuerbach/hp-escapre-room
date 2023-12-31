console.log('Main JS loaded');

/*
    The battlefield is a scene of constant chaos. 
    The winner will be the one who controls that chaos, both his own and the enemies.
    - Napoleon Bonaparte
*/
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
const q2a = [5,88,'dumbledore',9,0,'a','wh00p','','trap'];
const mainInfo = [
    ['c3QgcGFuY3JhcyBzdGF0aW9u', 'c3QucGFuY3JhcyBzdGF0aW9u', 'c3QuIHBhbmNyYXMgc3RhdGlvbg=='],
    'ZWVmYWQ=','NDkxNTY0','Y3Jpc3Bz','',
    'MzIxNTQ=',
    'ZWlnaHRmb3VydHdvc2l4emVyb2ZpdmU=','','NDE3NA=='
];

// To let or not to let, that is the question... (Not William Shakespear)
let partyTimer, endGameTimer, backgroundIndex = -1, oldBackgroundIndex = -1, debug = false, triedPanelCode = '';

function startGame() {
    if (partyTimer)
        clearInterval(partyTimer);

    changeBackground();
    const newBtn = alterThePage(pageZeroData);
    newBtn.addEventListener('click', firstClick);
}

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

const clickableClasses = ['greathall', 'fireplace'];
function changeClickable(className) {
    for (let i = 0; i < clickableClasses.length; i++) {
        imageHolder.classList.remove(clickableClasses[i]);
    }

    imageHolder.classList.add(className);
}

function showMainHall() {
    changeBackground();
    changeClickable('greathall');
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
        changeBackground();
        alterAndShowModal(
            'The main door...', 
            addParagraph('Filtch has already locked the main door, this is not the way out...'));
    });
    const bookcase = document.createElement('div');
    bookcase.classList.add('click-bookcase');
    bookcase.addEventListener('click', function() {
        changeBackground();
        alterAndShowModal(
            'A nice bookcase', 
            addParagraph('You find a nice bookcase in the greathall.. There a lot of books here. You notice that there are a couple of the same books in this case, when you look closley there are <b>eight</b> books with a <b>dark blue</b> cover called \'Fantastic Beasts, and where to find them\' '));
    });

    const plate = document.createElement('div');
    plate.classList.add('click-plate');
    plate.addEventListener('click', function() {
        changeBackground();
        alterAndShowModal(
            'A dirty plate', 
            addParagraph('How odd... there is a dirty plate here.. Normally all plates look clean, but this is not a clean plate. There are <b>two</b> breadcrumbs on the plate that kinda look <b>canary yellow</b>... Why wasn\'t this plate cleaned by the house elfs??'));
    });

    const candles = document.createElement('div');
    candles.classList.add('click-candles');
    candles.addEventListener('click', function() {
        changeBackground();
        alterAndShowModal(
            'The floating candles...', 
            addParagraph('This is magic at the purest... The roof does not seem to exists and a lot of floating candles without strings... All the candles seem to be white/ yellow... you can spot <b>no</b> candles that are <b>brown</b>'));
    });

    theClickables.appendChild(candles);
    theClickables.appendChild(plate);
    theClickables.appendChild(bookcase);
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
    
    const fireplace = document.createElement('div');
    fireplace.classList.add('click-fireplace-close');
    fireplace.addEventListener('click', function() {
        changeBackground();
        const thePar = addParagraph('That is a nice, cold, fireplace... nothing here...', ['position-relative']);

        alterAndShowModal(
            'The fireplace', 
            thePar
        );
    });

    const slyth = document.createElement('div');
    slyth.classList.add('click-slyth');
    slyth.addEventListener('click', function() {
        changeBackground();
        const theDiv = document.createElement('div');
        theDiv.appendChild(addParagraph('This is the slytherin sign, or also know as "Zwadderig" if you really want to screw-up English and read the books in Dutch...'))
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('But for now you study the sign and count noless then <b>six green</b> snakes..'));
        alterAndShowModal(
            'The slytherin sign', 
            theDiv
        );
    });

    const huff = document.createElement('div');
    huff.classList.add('click-huff');
    huff.addEventListener('click', function() {
        changeBackground();
        const theDiv = document.createElement('div');
        theDiv.appendChild(addParagraph('Hmm this is just the Hufflepuf sign, nothing really out of the ordinary'))
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('When you look really really close you see some sort of flagg'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('<b>dark-blue, red, canary-yellow, green, brown, silver</b>'));
        theDiv.appendChild(addParagraph('Could this be a clue??'));
        alterAndShowModal(
            'Hufflepuff sign', 
            theDiv
        );
    });
    const raven = document.createElement('div');
    raven.classList.add('click-raven');
    raven.addEventListener('click', function() {
        changeBackground();
        const theDiv = document.createElement('div');
        theDiv.appendChild(addParagraph('Ahh the witty...'))
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('As you look closely to the Ravenclaw sign you see it is dusty and you sneeze...'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('Atchoe!'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('You dust of the sign a bit more and read the inscription, in silver you read'));
        theDiv.appendChild(addParagraph('<b>Intelligent, Wise, Sharp, Individual and Witty</b>'));
        alterAndShowModal(
            'Ravenclaws dusty sign', 
            theDiv
        );
    });

    const doorpanel = document.createElement('div');
    doorpanel.classList.add('click-doorpanel');
    doorpanel.addEventListener('click', function() {
        changeBackground();
        const thePar = addParagraph('When you look closely to the woodenpanels you notice a toad-slime-track going under it.. Might there be a door here?', ['position-relative']);

        const newImg = document.createElement('img');
        newImg.src = '/img/old-lock.jpg';
        newImg.classList.add('w-100');
        thePar.append(newImg);
        triedPanelCode = '';
        const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero'];
        for (let i = 0; i < items.length; i++) {
            const theEl = document.createElement('div');
            theEl.classList.add(`popup-number-${items[i]}`);
            theEl.addEventListener('click', function() {
                triedPanelCode += items[i];
                const result = checkAnswer('wh00p', triedPanelCode);
                if (result) {
                    theModal.hide();
                    secretPassage();
                }
            });
            thePar.append(theEl);    
        }
        
        const secondPar = addParagraph('This panel seems to be lose.. After some wiggleing you found an old door key (again) but what is the code (click on the numbers/panel)?.');
        thePar.append(secondPar);

        alterAndShowModal(
            'The doorpanel', 
            thePar
        );
    });

    const hogwartsShield = document.createElement('div');
    hogwartsShield.classList.add('click-hogwarts-shield');
    hogwartsShield.addEventListener('click', function() {
        changeBackground();
        const theDiv = document.createElement('div');
        theDiv.appendChild(addParagraph('On top of the fireplace you see the Hogwarts crest. A nice shield with crests of the four houses pictured in it.'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('When you look close you can see the names of the houses karfed in the shield in <b>red</b>'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('<b>Gryffindor, Ravenclaw, Hufflepuff</b> and <b>Slytherin</b>'));
        alterAndShowModal(
            'Hogwarts shield', 
            theDiv
        );
    });
    
    theClickables.appendChild(hogwartsShield);
    theClickables.appendChild(doorpanel);
    theClickables.appendChild(fireplace);
    theClickables.appendChild(raven);
    theClickables.appendChild(huff);
    theClickables.appendChild(slyth);
    theClickables.appendChild(goBack);
}

function secretPassage() {
    mainMask.classList.remove('hidden');
    theClickables.classList.add('hidden');

    const newBtn = alterThePage(pageSixData);
    newBtn.addEventListener('click', function() {
        seventhPuzzle();
    });
}

function seventhPuzzle() {
    const newBtn = alterThePage(pageSevenData);
    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-seven-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer(88, answer);

        if (!result) {
            alterAndShowModal(
                'Nops..', 
                addParagraph('Sadly to find out you are NOT the puzzlemaster.... Please try again..'));
            return;
        }

        eighthPuzzle();
    });
}

function eighthPuzzle() {
    const newBtn = alterThePage(pageEightData);
    newBtn.addEventListener('click', function() {
        ninthPuzzle();
    });
}

function ninthPuzzle() {
    const newBtn = alterThePage(pageNineData);
    const theDiv = document.createElement('div')
    theDiv.appendChild(addParagraph('After a long day of searching and not eating and working and and and... it is time to sleep...'));
    theDiv.appendChild(addParagraph(''));
    theDiv.appendChild(addParagraph('The moment your head touches your pillow, you feel your eyes become heavier and you fall a sleep fast in a deep, deep, deep, deep sleep....'));
    theDiv.appendChild(addParagraph(''));
    theDiv.appendChild(addImage('/img/dementor.png', ['w-100']));
    theDiv.appendChild(addParagraph(''));
    theDiv.appendChild(addParagraph('That night you dream of missing toads, triollions of points deducted from your house and nasty dementors who want to kiss your soul...'));
    
    alterAndShowModal(
        'Zzzzzz', 
        theDiv
    );

    newBtn.addEventListener('click', lastPuzzle);
}

function positionClassroom() {
    const newBtn = alterThePage(pagePotionsData);
}

function lastPuzzle() {
    const newBtn = alterThePage(lastPuzzleData);

    newBtn.addEventListener('click', function() {
        const newInput = document.querySelector('.question-ten-input');
        const answer = newInput.value.toLowerCase();
        const result = checkAnswer('dumbledore', answer);
        if (!result) {
            alterAndShowModal('Darnit...', addParagraph('You wiggle and wiggle and wiggle.... and .... no luck :-( Once again professor Wagenaar is dissapointed in your mathskills'));
            return;
        } 

        endRoom();
    });
}

function endRoom() {
    const newBtn = alterThePage(endRoomData);
    partyTimer = setInterval(changeBackground, 250);
    newBtn.addEventListener('click', function() {
        if (endGameTimer)
            clearInterval(endGameTimer);

        const theDiv = document.createElement('div')
        theDiv.appendChild(addParagraph('Filtch storms up to you and grabs you by your ear..'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addParagraph('Filtch yells in your ear: "What does the sign on the button say boy??" Do you think I clean up and dust this button so you can touch it with your filthy greasy hands?? NO SIR IT IS NOT! Just for this I shall kick you back to the start of the game!'));
        theDiv.appendChild(addParagraph(''));
        theDiv.appendChild(addImage('/img/filtch.png', ['w-100']));
        
        alterAndShowModal(
            'I said!', 
            theDiv
        );

        endGameTimer = setTimeout(startGame, 5000);
    });
}

//Let's start the game
//startGame();
//debug = true;

if (debug)
    document.body.classList.add('debug');

startGame();