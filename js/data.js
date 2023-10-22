console.log('Data JS loaded');

/*
Wine is constant proof that God loves us and loves to see us happy.
- Benjamin Franklin
*/

const pageZeroData = {
    newPar: ['', ['m-5']],
    newInput: '',
    removeBackground: 'greathall-party',
    addBackground: 'privet',
    title: `Welcome to the Harry Potter escapegame`,
    mainText: [
        'You are about to travel to Hogwarts school of Witchcraft and Wizardry. You are packed and ready to go when you get an owl from your friend Neville.',
        'As not more then often Neville lost his toad Trevor once more.. #sadlife<br>How ever some people have found some clues. Use them to find Trevor and reunite Neville with Trevor.<br>Trevor was sighted going to Kingscross, so lets go there...',
        '',
        '<b>Please note:</b> In order to solve the game you will need to write things down, make sure you have your quil and a piece of parchment ready (or Notepad for the sad Muggles.',
        'As you advance in the game you can not go back to previous rooms!',
        '',
        '<b>Be warned and read all the text carefully!</b>',
    ],
    btnOptions: ['Let\'s-a-go', ['px-5', 'btn', 'btn-lg', 'btn-primary']]
}

const pageOneData = {
    newPar: ['', ['m-5']],
    newInput: ['Name the station', ['question-one-input']],
    removeBackground: 'privet',
    addBackground: 'pancras',
    title: `Let's get ready for our adventure!`,
    mainText: [
        'But let us start with an easy one!',
        'As you know Harry Potter leaves from platform 9 and three quarters from Kings Cross Station as you can see in the new background image',
        'But in real life, this is not actually Kings Cross Station, it is another station (which actually is near Kings Cross). What is the name of this station? (Fullname)'
    ],
    btnOptions: ['Name the station', ['px-5', 'btn', 'btn-lg', 'btn-info']]
}

const pageTwoData = {
    newPar: ['', ['m-5']],
    newInput: ['What is the answer?', ['question-two-input']],
    removeBackground: 'pancras',
    addBackground: 'platform_934',
    title: `Welcome to platform 9&#xbe;`,
    mainText: [
        'Correct, the movie used St. Pancras Station because it was more appealing then the boring original Kings Cross Station',
        'St. Pancras is, by the way, only about 50 meters away from Kings Cross...',
        '',
        'But back to our story...',
        'As you walk to platform 9&#xbe; you see Trevor hopping in to the train to Hogwarts',
        'You run towards the doors where you saw Trevor but are stopped by a guard since running on a full platform is not allowed',
        'you can pass if you solve this riddle....',
        '',
    ],
    featureImage: ['/img/train-puzzle-one.png', ['w-100']],
    secondaryText: [
        '',
        'What is the correct order to create the train? (numbers only, no spaces)'
    ],
    btnOptions: ['What is the answer', ['px-5', 'btn', 'btn-lg', 'btn-warning']]
}

const pageThreeData = {
    newPar: ['', ['m-5']],
    newInput: ['Again we challenge you...', ['question-three-input']],
    removeBackground: 'platform_934',
    addBackground: 'inside_hogwarts_express',
    title: `Let's ride....`,
    mainText: [
        'As always the trolley lady comes by with her cart full of sweets and yummies',
        'you haven\'t eaten all day so you want to order something, but the trolley lady has a riddle first:',
        '',
        'We are born from potatoes',
        'you don\'t need a spoon.',
        'We crunch, crunch, munch,', 
        'We are a salty or flavoured bunch.',
        '',
        'What are we? (think English, not American)'
    ],
    featureImage: '',
    secondaryText: [
        '',
    ],
    btnOptions: ['What yummy food are we?', ['px-5', 'btn', 'btn-lg', 'btn-success']]
}

const pageFourData = {
    newPar: ['', ['m-5']],
    newInput: ['9000', ['question-four-input']],
    removeBackground: 'inside_hogwarts_express',
    addBackground: 'hogwarts-castle-outside',
    title: `Welcome to Hogwarts school of Witchcraft and Wizardry`,
    mainText: [
        'Sadly you could not find Trevor inside the Hogwarts Express...',
        '',
        'Because of the search, you are late and do not want to enter thru the main gate, professor Snape might catch you and deduct one trillion points from your house.',
        '',
    ],
    featureImage: ['/img/old-lock.jpg', ['w-75']],
    secondaryText: [
        'You decide to use the secret backdoor, but you will need a numeral combination, sadly the door is protected and alohamora does not work.<br> You have hint:',
        'a+b+c+(c*a)+(b-a)-c+(a*b*c)',
        '',
    ],
    btnOptions: ['Unlock me', ['px-5', 'btn', 'btn-lg', 'btn-warning']]
}

const pageFiveData = {
    newPar: ['', ['m-5']],
    newInput: [],
    removeBackground: 'hogwarts-castle-outside',
    addBackground: 'greathall',
    title: `You made it in, but ....`,
    mainText: [
        'Oh no, you missed the sorting ceremony AND all the food is gone..',
        '',
        'And worst of all, still no sign of Trevor. Look arround to find clues or food, when you click on the button, you can search places in the great hall..',
        '',
    ],
    featureImage: '',

    btnOptions: ['Look arround', ['px-5', 'btn', 'btn-lg', 'btn-danger']]
}
const pageSixData = {
    newPar: ['', ['m-5']],
    newInput: [],
    removeBackground: 'fireplace',
    addBackground: 'secret-passage',
    title: `A new trail to Trevor...`,
    mainText: [
        'As the door slowly opens you notice a small corridor...',
        'Could this be a secretpassage not seen or known on the Marauders map??',
        'You can see some trace of Trevor going down this secret passage,',
        'determined to help your good friend Neville your follow the trail',
        '',
        'Where will the trail go to??',
    ],
    featureImage: '',

    btnOptions: ['Walk through the passage...', ['px-5', 'btn', 'btn-lg', 'btn-info']]
}
const pageSevenData = {
    newPar: ['', ['m-5']],
    newInput: ['?????', ['question-seven-input']],
    removeBackground: 'secret-passage',
    addBackground: 'common-room',
    title: `Welcome to the commonroom`,
    mainText: [
        'In the commonroom you find a new trial going up, but as you you will now have found out, you can not just go follow the trail...',
        'Solve the following puzzle to contine... But beware... 1 is not always 1, sometimes 1 is .... ??',
        '',
    ],
    featureImage: ['/img/sudoku.png', ['w-50']],
    secondaryText: [
        'Make sure you understand the hint ;-)'
    ],
    btnOptions: ['Solve me :-)', ['px-5', 'btn', 'btn-lg', 'btn-success']]
}
const pageEightData = {
    newPar: ['', ['m-5']],
    newInput: '',
    removeBackground: 'common-room',
    addBackground: 'dorms',
    title: `Nighty night..... `,
    mainText: [
        'After solving that last puzzle you follow Trevors trail into your dormitory, but when you get up there, as always, no sign of Trevor',
        '',
        'This does feel like "Sorry Mario, but the princess is in another castle" (please pronounce British,not American)',
        '',
        'You notice that you actually are very tired, and although you want to keep on searching, this has been a long-long day and that bed just looks fine to you..',
        '',
        'After a long-long day you finaly see your fourposter bed, you hop into your PJ\'s and even before your head touches your pillow you are off in dreamland...',
    ],
    featureImage: '',
    
    btnOptions: ['Sleep well....', ['px-5', 'btn', 'btn-lg', 'btn-warning']]
}
const pageNineData = {
    newPar: ['', ['m-5']],
    newInput: '',
    removeBackground: '',
    addBackground: '',
    title: `Goodmorning...`,
    mainText: [
        'As you slowly wakeup in the morning you have this odd and nasty feeling about the terrors of the night before.',
        '',
        'Where there really dementors? Was it a dream? And where the dungballs is that missing toad..',
        '',
        'Then you remeber, the toad, Trevor... You promissed Neville to find the darnish thing, so onward!',
        '',
        'When you take a good look arround, you notice the trail of Trevor leading to the potions classroom',
    ],
    featureImage: '',
    
    btnOptions: ['Onwards to find Trevor...', ['px-5', 'btn', 'btn-lg', 'btn-danger']]
}
const pagePotionsData = {
    newPar: ['', ['m-5']],
    newInput: '',
    removeBackground: 'dorms',
    addBackground: 'potions-center',
    title: `I can teach you how to bewitch the.....`,
    mainText: [
        'As you enter the potions classroom you remember the first thing professor Snape told you. "“I can teach you how to bewitch the mind and ensnare the senses. I can tell you how to bottle fame, brew glory, and even put a stopper in death.”',
        '',
        'But where did Trevor go, you need to look arround the potions classroom to search for Trevor..',
        '',
    ],
    featureImage: '',
    
    btnOptions: ['Feel free to look arround', ['px-5', 'btn', 'btn-lg', 'btn-danger']]
}
const lastPuzzleData = {
    newPar: ['', ['m-5']],
    newInput: ['42', ['question-ten-input']],
    removeBackground: 'dorms',
    addBackground: 'bathroom',
    title: `Moaning Myrtle\'s or plain bathroom?`,
    mainText: [
        'When you enter the bathroom you directly notice the toadlike stench, Trevor must be close.',
        'You look arround and then you see it, Trevor is there in a corner in a cage with a lock on it..',
        'Almost there, just this final riddle and you can help out Neville in returning Trevor...'
    ],
    featureImage: ['/img/old-lock-2.jpg', ['w-50']],
    secondaryText: [
        'Searching the bathroom you find this hint:',
        '1+1=121<br>1+2=134<br>2+2=444<br>3+2=954<br>7+8=???'
    ],
    btnOptions: ['Can you free the toad?', ['px-5', 'btn', 'btn-lg', 'btn-primary']]
}
const endRoomData = {
    newPar: ['', ['m-2']],
    newInput: '',
    removeBackground: 'bathroom',
    addBackground: 'greathall-party',
    title: `You did it!`,
    mainText: [
        'YES! You got Trevor out... PARTY!',
    ],
    featureImage: ['/img/trevor-and-neville.png', ['w-50']],

    btnOptions: ['This button is only here for the show', ['m-0', 'px-5', 'btn', 'btn-lg', 'btn-outline-success']]
}