
// 타이머 구분 요소
let btn = $('.timeSection .list li');
let btnSec = $('.list');
let themeSec = $('.themeList');
let themeli = $('.themeList li');

// 뒤로가기 버튼 요소
let back1 = $('.back1');
let back2 = $('.back2');
let back3 = $('.back3');
let back4 = $('.back4');
let back5 = $('.back5');

// 테마 구분 요소
let thClassic = $('.classic');
let thNature = $('.nature');
let thAnimal = $('.animal');
let thFootball = $('.football');
let theme = $('.Theme');

// 테마 선택 및 뒤로가기 함수
btn.click(function() {
    btnSec.toggleClass('dp-none');
    themeSec.toggleClass('dp-none');
});

back1.click(function() {
    themeSec.toggleClass('dp-none');
    btnSec.toggleClass('dp-none');
})

back2.click(function() {
    thClassic.toggleClass('dp-none');
    themeSec.toggleClass('dp-none');
})

back3.click(function() {
    thNature.toggleClass('dp-none');
    themeSec.toggleClass('dp-none');
})

back4.click(function() {
    thAnimal.toggleClass('dp-none');
    themeSec.toggleClass('dp-none');
})

back5.click(function() {
    thFootball.toggleClass('dp-none');
    themeSec.toggleClass('dp-none');
})

themeSec.children('li:eq(0)').click(function() {
    themeSec.toggleClass('dp-none');
    thClassic.toggleClass('dp-none');
});

themeSec.children('li:eq(1)').click(function() {
    themeSec.toggleClass('dp-none');
    thNature.toggleClass('dp-none');
});

themeSec.children('li:eq(2)').click(function() {
    themeSec.toggleClass('dp-none');
    thAnimal.toggleClass('dp-none');
});

themeSec.children('li:eq(3)').click(function() {
    themeSec.toggleClass('dp-none');
    thFootball.toggleClass('dp-none');
});


// if (btn.hasClass(back))



// 명언 영역
var wsArr = [`변명 중에서도 <br>가장 어리석고 못난 변명은 <b><br>"시간이 없어서"<br></b>라는 변명이다. <br><span>-아인슈타인-</span>`
        ,`짧은 인생은 시간낭비에 의해 더욱 짧아진다. <br><span>-S. 존슨-</span>`
        ,`시간을 단축시키는 것은 활동이요, 시간을 견디지 못하게 하는것은 안일함이다 <br><span>-괴테-</span>`
        ,`계획이란 미래에 관한 현재의 결정이다 <br><span>-드래커-</span>`
        ,`승자는 시간을 관리하며 살고, 패자는 시간에 끌려 산다. <br><span>-J. 하비스-</span>`
        ,`낭비한 시간에 대한 후회는 더 큰 시간 낭비이다. <br><span>-메이슨 쿨러-</span>`
        ,`당신은 지체할수도 있지만 시간은 그러하지 않을 것이다. <br><span>-B. 프랭클린-</span>`
        ,`우리의 미래는 현재 우리가 어떤것을 하는가에 달려 있다.<br><span>-간디-</span>`
        ,`항상 갈망하라. 늘 바보처럼 언제나 우직하게, 하루하루를 인생의 마지막 날처럼 살아라.<br><span>-스티브잡스-</span>`
];

const wsOut = document.querySelector('.wsArr');
    var i = (Math.floor(Math.random()*10));
    wsOut.innerHTML=[wsArr[i]];

