let questions = [{
    question: "What is the baby of a Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctChoice: 3
}, {
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"],
    correctChoice: 2
}, {
    question: "What is the young of Bufallo called?",
    choices: ["calf", "baby", "pup","cow"],
    correctChoice: 0
}, {
    question: "What a baby Aligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctChoice: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctChoice: 1
}, {
    question: "What is a baby Hamster called?",
    choices: ["pup", "chick", "infant", "billy"],
    correctChoice: 0	
	
}, {
    question: "What is a baby Hawk called?",
    choices: ["hawklett", "pup", "larva", "eyas"],
    correctChoice: 3	
}, {
    question: "What is a baby grasshopper called?",
    choices: ["hopper", "nymph", "stick", "pup"],
    correctChoice: 1
}, {
    question: "What is a baby Kangaroo called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctChoice: 1

}, {
    question: "What is a baby Whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctChoice: 1

}, {
    question: "What is a baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctChoice: 0

	}, {
    question: "What is a baby Bear Called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctChoice: 0
}];

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