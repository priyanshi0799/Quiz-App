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
    $(this).find('.result').hide();
    $(this).find('.button').on('click', function(){
        if(!finish){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find('.message').text('Please select an option');
                $(document).find('.message').show();
            }else{
                $(document).find('.message').hide();
                if(value == questions[currentQuestion].correctChoice){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion<questions.length){
                    displayCurrentQuestion();
                }else{
                    console.log(currentQuestion)
                    displayScore();
                    $(document).find('.button').text('Play Again?');
                    finish = true;
                }
            }
        }else{
            finish = true;
            $(document).find('.button').text('Next Question');
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    })
})

function displayCurrentQuestion(){
    let question = questions[currentQuestion].question;
    let questionClass = $(document).find('.question');
    let choiceList = $(document).find('.choice');
    let numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);
    $(choiceList).find('li').remove();

    let choice;
    for(i=0; i< numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    $(document).find('.container > .result').text('You scored ' + correctAnswers + '/' + questions.length);
    $(document).find('.container > .result').show();
}

function hideScore() {
    $(document).find('.result').hide();
}