let btn = $('.btn');
let userScore = 0;
let computerScore = 0;
let userScoreLoca = $('.user-score');
let computerScoreLoca = $('.computer-score');
let comResult = $('.com-result');
let userResult = $('.user-result');

btn.on('click', function() {
    // computer result section
    let randomResult = Math.floor(Math.random() * 3 + 1);
    let userResultScore;
    if (randomResult == 1) {
        comResult.text('✌');
    }
    else if (randomResult == 2) {
        comResult.text('✊');
    }
    else {
        comResult.text('🤚');
    }
    if ($(this).hasClass('ga')){
        userResultScore = 1;
        userResult.text('✌');
        if(userResultScore - randomResult == 0) {
            console.log('draw');
        }
        else if (userResultScore - randomResult == -1) {
            console.log('loose');
            computerScore += 1;
            computerScoreLoca.text(computerScore);
        }
        else {
            console.log('win!');
            userScore += 1;
            userScoreLoca.text(userScore);
        }
    }
    else if ($(this).hasClass('ba')){
        userResultScore = 2;
        userResult.text('✊');
        if(userResultScore - randomResult == 0) {
            console.log('draw');
        }
        else if (userResultScore - randomResult == -1) {
            console.log('loose');
            computerScore += 1;
            computerScoreLoca.text(computerScore);
        }
        else {
            console.log('win!');
            userScore += 1;
            userScoreLoca.text(userScore);
        }
    }
    else {
        userResultScore = 3;
        userResult.text('🤚');
        if(userResultScore - randomResult == 0) {
            console.log('draw');
        }
        else if (userResultScore - randomResult == 2) {
            console.log('loose');
            computerScore += 1;
            computerScoreLoca.text(computerScore);
        }
        else {
            console.log('win!');
            userScore += 1;
            userScoreLoca.text(userScore);
        }
    }
})
