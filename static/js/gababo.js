

let btn = $('.btn-section .btn');
let resetBtn = $('.reset-btn');
let userScore = 0;
let computerScore = 0;
let userScoreLoca = $('.user-score');
let computerScoreLoca = $('.computer-score');
let comResult = $('.com-result');
let userResult = $('.user-result');

let switiching = setInterval(function() {
    let randomResult = Math.floor(Math.random() * 3 + 1);
    if (randomResult == 1) {
        comResult.text('✌');
    }
    else if (randomResult == 2) {
        comResult.text('✊');
    }
    else {
        comResult.text('🤚');
    }
}, 100);


btn.on('click', function() {
    clearInterval(switiching);
    btn.attr('disabled',true);
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
            Swal.fire('draw!');
        }
        else if (userResultScore - randomResult == -1) {
            Swal.fire('loose!');
            computerScore += 1;
            computerScoreLoca.text(`computer score: ${computerScore}`);
        }
        else {
            Swal.fire('win!');
            userScore += 1;
            userScoreLoca.text(`user score: ${userScore}`);
        }
    }
    else if ($(this).hasClass('ba')){
        userResultScore = 2;
        userResult.text('✊');
        if(userResultScore - randomResult == 0) {
            Swal.fire('draw!');
        }
        else if (userResultScore - randomResult == -1) {
            Swal.fire('loose!');
            computerScore += 1;
            computerScoreLoca.text(`computer score: ${computerScore}`);
        }
        else {
            Swal.fire('win!');
            userScore += 1;
            userScoreLoca.text(`user score: ${userScore}`);
        }
    }
    else {
        userResultScore = 3;
        userResult.text('🤚');
        if(userResultScore - randomResult == 0) {
            Swal.fire('draw!');
        }
        else if (userResultScore - randomResult == 2) {
            Swal.fire('loose!');
            computerScore += 1;
            computerScoreLoca.text(`computer score: ${computerScore}`);
        }
        else {
            Swal.fire('win!');
            userScore += 1;
            userScoreLoca.text(`user score: ${userScore}`);
        }
    }
    
});

resetBtn.on('click', function() {
    btn.attr('disabled', false);
    switiching = setInterval(function() {
        let randomResult = Math.floor(Math.random() * 3 + 1);
        if (randomResult == 1) {
            comResult.text('✌');
        }
        else if (randomResult == 2) {
            comResult.text('✊');
        }
        else {
            comResult.text('🤚');
        }
    }, 100);
})
