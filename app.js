let questions = [
    {
        question: 'What is the young buffalo called ?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
    {
        question: 'What is the young buffalo called 2?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
    {
        question: 'What is the young buffalo called 3?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
    {
        question: 'What is the young buffalo called ?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
    {
        question: 'What is the young buffalo called ?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
    {
        question: 'What is the young buffalo called ?',
        choices: ['calf' , 'baby' , 'puppy' , 'cow'],
        correctChoice: 0
    },
]

let currentQuestion = 0;
let correctAnswers = 0;
let finish = false;

$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find('.message').hide();
    $(this).find('.next').on('click', function(){
        if(!finish){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find('.message').text('Please select an option');
                $(document).find('.message').show();
            }else{
                $(document).find('.message').hide();
                if(value === questions[currentQuestion].correctChoice){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find('.next').text('Play Again?');
                    finish = true;
                }
            }
        }else{
            finish = true;
            $(document).find('.next').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    })
})

function displayCurrentQuestion(){
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find('container > .question');
    let choiceList = $(document).find('container > .choice');
    let numChoices = questions[currentQuestion].choices.length;

    $(document).find('.question').text(question);
    $(choice).find('li').remove();

    let choice;
    for(let i=0; i< numChoices; i++){
        choice = question[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    $(document).find('.container > .result').text('You scored ' + correctAnswers);
    $(document).find('.container > .result').show();
}

function hideScore() {
    $(document).find('.result').hide();
}