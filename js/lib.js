console.log('Library JS loaded');

/**
 * The function of education is to teach one to think intensively and to think critically. 
 * Intelligence plus character - that is the goal of true education.
 * Martin Luther King, Jr.
 */

function addImage(imageSrc, extraClass=[]) {
    const newEl = document.createElement('img');
    newEl.src = imageSrc;

    extraClass.forEach(function(c) {
        newEl.classList.add(c)
    });

    return newEl;
}

function addParagraph(text, extraClass=[]) { 
    const newEl = document.createElement('p');
    newEl.classList.add('m-0');

    extraClass.forEach(function(c) {
        newEl.classList.add(c)
    });

    newEl.innerHTML = text;

    return newEl;
}
function addInput(placeholder, extraClass = []) { 
    const newInput = document.createElement("input");
    newInput.classList.add('form-control');
    extraClass.forEach(function(c) {
        newInput.classList.add(c);
    });
    newInput.placeholder = placeholder;

    return newInput;
}

function createBtn(txt, colorClassArr) {
    const newBtn = document.createElement("button");
    newBtn.textContent = txt;
    newBtn.classList.add(...colorClassArr);

    return newBtn;
}

function checkAnswer(questionNo, answer) {
    const idx = q2a.findIndex((e) => e === questionNo);
    correctAnswer = answers[idx];
    //No array answer
    if (!(Object.prototype.toString.call(correctAnswer) == '[object Array]') && correctAnswer.toLowerCase() === answer.toLowerCase()) {
        return true;
    }

    //array answer
    let returnValue = false;
    for (let i = 0; i < correctAnswer.length; i++) {
        if (answer === correctAnswer[i])
            returnValue = true;
    }

    if (debug) { return true; }
    return returnValue;
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function changeBackground() {
    for (let i = 0; i < backgrounds.length; i++) {
        document.body.classList.remove(backgrounds[i][0]);
        document.body.classList.remove(backgrounds[i][1]);
    }

    do {
        backgroundIndex = getRandomNumber(backgrounds.length);
    } while(backgroundIndex === oldBackgroundIndex)

    oldBackgroundIndex = backgroundIndex;
    document.body.classList.add(backgrounds[backgroundIndex][1], backgrounds[backgroundIndex][0])
}
function changeModalBackground() {
    const modalChangeElement = document.querySelector('.main-modal .modal-content');
    for (let i = 0; i < modalColours.length; i++) {
        modalChangeElement.classList.remove(modalColours[i][0]);
        modalChangeElement.classList.remove(modalColours[i][1]);
    }

    modalChangeElement.classList.add(modalColours[backgroundIndex][1], modalColours[backgroundIndex][0]);
}

function alterAndShowModal(titleText, bodyElement) {
    const title = document.querySelector('.main-modal .modal-title');
    const body = document.querySelector('.main-modal .modal-body');
    title.textContent = titleText;
    body.innerHTML = '';
    body.appendChild(bodyElement);

    changeModalBackground();
    theModal.show();
}

function alterThePage(data) {
    const newPar = addParagraph(data.newPar[0], data.newPar[1]);
    let newInput = '';
    if (data.newInput.length > 0) {
        newInput = addInput(data.newInput[0], data.newInput[1]);
    }
    
    changeBackground();

    //Main changes to the game frontend
    imageHolder.classList.remove(data.removeBackground);
    imageHolder.classList.add(data.addBackground);
    titleHolder.innerHTML = data.title;
    textHolder.innerHTML = '';
    for (let i = 0; i < data.mainText.length; i++) {
        const extra = [];
        if (data.mainText[i] === '')
            extra.push('m-5');

        textHolder.appendChild(addParagraph(data.mainText[i], extra));
    }
        
    if (data.featureImage)
        textHolder.appendChild(addImage(data.featureImage[0], data.featureImage[1]));

    if (data.secondaryText) {
        for (let i = 0; i < data.secondaryText.length; i++) {
            const extra = [];
            if (data.secondaryText[i] === '')
                extra.push('m-5');
    
            textHolder.appendChild(addParagraph(data.secondaryText[i], extra));
        }
    }

    //Only show the input if the array was not empty
    if (newInput !== '')
        newPar.appendChild(newInput);

    textHolder.appendChild(newPar);
    btnHolder.innerHTML = '';
    newBtn = createBtn(data.btnOptions[0], data.btnOptions[1]);
    btnHolder.appendChild(newBtn);

    return newBtn;
}