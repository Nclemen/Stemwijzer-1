var answers = [];
var index = 0;
var results = false;

var title = document.getElementById('title');
var statement = document.getElementById('statement');

var buttons = document.getElementById('buttonBlock');

var agree = document.getElementById('agree');
var disagree = document.getElementById('disagree');
var neutral = document.getElementById('neutral');

var start = document.getElementById('start');
var list = document.getElementById('list');

var end = document.getElementById('result');

function startStemWijzer () {
    console.log(subjects);
    console.log(parties);
    start.remove();
    list.style.display = 'block';
    displayStatement(0);
}

function displayStatement(index) {
    title.innerHTML = (index+1).toString() + '. ' + subjects[index].title;
    statement.innerHTML = subjects[index].statement;

    answerCheck();
    // debuggAnswers();
}

function displayResults() {
    buttons.style.display = 'none';
    title.style.display = 'none';
    statement.style.display = 'none';

    end.style.display = 'block';

    answerMatch();
}

function agreeQuestion() {
    answers[index] = 'pro';
    checkEnd();

    console.log("questions amount: " + subjects.length);
    indexCheck();
    displayStatement(index);

    // debugg();
}

function disagreeQuestion() {
    answers[index] = 'contra';
    checkEnd();

    indexCheck();
    displayStatement(index);
}

function neutralQuestion() {
    answers[index] = 'none';
    checkEnd();

    indexCheck();
    displayStatement(index);
}

function skipQuestion() {
    answers[index] = '';
    checkEnd();

    indexCheck();
    displayStatement(index);
}

function previousQuestion() {
    if (results === true) {
        index = (subjects.length-1);
        buttons.style.display = 'block';
        title.style.display = 'block';
        statement.style.display = 'block';
        end.style.display = 'none';
    }
    if (results === false && index > 0) {
        index--;        
    }
    displayStatement(index);
    results = false;
}

function answerCheck() {
    switch(answers[index]) {
        case 'pro':
            agree.classList.add('selectedButton');
            disagree.classList.add('unselectedButton');
            neutral.classList.add('unselectedButton');

            agree.classList.remove('unselectedButton');
            disagree.classList.remove('selectedButton');
            neutral.classList.remove('selectedButton');
            break;
        case 'contra':
            disagree.classList.add('selectedButton');
            agree.classList.add('unselectedButton');
            neutral.classList.add('unselectedButton');

            agree.classList.remove('selectedButton');
            disagree.classList.remove('unselectedButton');
            neutral.classList.remove('selectedButton');
            break;
        case 'none':
            neutral.classList.add('selectedButton');
            agree.classList.add('unselectedButton');
            disagree.classList.add('unselectedButton');

            agree.classList.remove('selectedButton');
            disagree.classList.remove('selectedButton');
            neutral.classList.remove('unselectedButton');
            break;
        default:
            agree.classList.add('unselectedButton');
            disagree.classList.add('unselectedButton');
            neutral.classList.add('unselectedButton');

            agree.classList.remove('selectedButton');
            disagree.classList.remove('selectedButton');
            neutral.classList.remove('selectedButton');
            break;     
    }
}

function indexCheck() {
    if (index < (subjects.length-1)) {
        index++;
    }
}

function checkEnd() {
    if (index == (subjects.length-1) && answers.length == subjects.length) {
        console.log('This is the end');
        results = true;
        displayResults();
        // answerMatch();
    }
}

// The answerMatch function goes over all your answers and matches them to the opinions of the parties
function answerMatch() {
    answers.forEach((answer,i) => {
        console.log(i + ' = ' + answer);
    });

    //loop through anwsers
        // loop through subject opinions
        // match all subject opionion with looped answer
}


//debugging
function debuggAnswers() {
    console.log(answers);
}

function debugg() {
    console.log('awnsers: ' + answers.length);
    console.log('index: ' + index);
}