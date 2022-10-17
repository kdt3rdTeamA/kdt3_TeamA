
// 타이머 구분 요소
let btn = $('.timeSection .list li');
let list = $('.list');
// pomo, timer, sw
let pomoBtn = $('.pomoBtn');
let timerBtn = $('.timerBtn');
let swBtn = $('.swBtn');

// theme list 
let pomoThemeList = $('.themeList.pomo');
let timerThemeList = $('.themeList.timer');
let swThemeList = $('.themeList.sw');
let themeli = $('.themeList li');

// 뒤로가기 버튼 요소
// pomoBack
let pomoBack1 = $('.back1.pomo');
let pomoBack2 = $('.back2.pomo');
let pomoBack3 = $('.back3.pomo');
let pomoBack4 = $('.back4.pomo');
let pomoBack5 = $('.back5.pomo');

// timerBack
let timerBack1 = $('.back1.timer');
let timerBack2 = $('.back2.timer');
let timerBack3 = $('.back3.timer');
let timerBack4 = $('.back4.timer');
let timerBack5 = $('.back5.timer');

// swBack
let swBack1 = $('.back1.sw');
let swBack2 = $('.back2.sw');
let swBack3 = $('.back3.sw');
let swBack4 = $('.back4.sw');
let swBack5 = $('.back5.sw');

// 테마 구분 요소
let pomoClassic = $('.classic.pomo');
let timerClassic = $('.classic.timer');
let swClassic = $('.classic.sw');

let pomoNature = $('.nature.pomo');
let timerNature = $('.nature.timer');
let swNature = $('.nature.sw');

let thAnimal = $('.animal');
let pomoAnimal = $('.animal.pomo');
let timerAnimal = $('.animal.timer');
let swAnimal = $('.animal.sw');

let thFootball = $('.football');
let pomoFootball = $('.football.pomo');
let timerFootball = $('.football.timer');
let swFootball = $('.football.sw');

let theme = $('.Theme');

// 테마 선택 및 뒤로가기 함수

// pomoBtn line
pomoBtn.click(function() {
    list.toggleClass('dp-none');
    pomoThemeList.toggleClass('dp-none');
});

pomoThemeList.children('li:eq(0)').click(function() {
    pomoThemeList.toggleClass('dp-none');
    pomoClassic.toggleClass('dp-none');
});

pomoThemeList.children('li:eq(1)').click(function() {
    pomoThemeList.toggleClass('dp-none');
    pomoNature.toggleClass('dp-none');
});

pomoThemeList.children('li:eq(2)').click(function() {
    pomoThemeList.toggleClass('dp-none');
    pomoAnimal.toggleClass('dp-none');
});

pomoThemeList.children('li:eq(3)').click(function() {
    pomoThemeList.toggleClass('dp-none');
    pomoFootball.toggleClass('dp-none');
});

// timerBtn line
timerBtn.click(function() {
    list.toggleClass('dp-none');
    timerThemeList.toggleClass('dp-none');
});

timerThemeList.children('li:eq(0)').click(function() {
    timerThemeList.toggleClass('dp-none');
    timerClassic.toggleClass('dp-none');
});

timerThemeList.children('li:eq(1)').click(function() {
    timerThemeList.toggleClass('dp-none');
    timerNature.toggleClass('dp-none');
});

timerThemeList.children('li:eq(2)').click(function() {
    timerThemeList.toggleClass('dp-none');
    timerAnimal.toggleClass('dp-none');
});

timerThemeList.children('li:eq(3)').click(function() {
    timerThemeList.toggleClass('dp-none');
    timerFootball.toggleClass('dp-none');
});

// swBtn line
swBtn.click(function() {
    list.toggleClass('dp-none');
    swThemeList.toggleClass('dp-none');
});

swThemeList.children('li:eq(0)').click(function() {
    swThemeList.toggleClass('dp-none');
    swClassic.toggleClass('dp-none');
});

swThemeList.children('li:eq(1)').click(function() {
    swThemeList.toggleClass('dp-none');
    swNature.toggleClass('dp-none');
});

swThemeList.children('li:eq(2)').click(function() {
    swThemeList.toggleClass('dp-none');
    swAnimal.toggleClass('dp-none');
});

swThemeList.children('li:eq(3)').click(function() {
    swThemeList.toggleClass('dp-none');
    swFootball.toggleClass('dp-none');
});

// pomo backBtn
pomoBack1.click(function() {
    pomoThemeList.toggleClass('dp-none');
    list.toggleClass('dp-none');
})

pomoBack2.click(function() {
    pomoClassic.toggleClass('dp-none');
    pomoThemeList.toggleClass('dp-none');
})

pomoBack3.click(function() {
    pomoNature.toggleClass('dp-none');
    pomoThemeList.toggleClass('dp-none');
})

pomoBack4.click(function() {
    pomoAnimal.toggleClass('dp-none');
    pomoThemeList.toggleClass('dp-none');
})

pomoBack5.click(function() {
    pomoFootball.toggleClass('dp-none');
    pomoThemeList.toggleClass('dp-none');
})

//timerBack btn
timerBack1.click(function() {
    timerThemeList.toggleClass('dp-none');
    list.toggleClass('dp-none');
})

timerBack2.click(function() {
    timerClassic.toggleClass('dp-none');
    timerThemeList.toggleClass('dp-none');
})

timerBack3.click(function() {
    timerNature.toggleClass('dp-none');
    timerThemeList.toggleClass('dp-none');
})

timerBack4.click(function() {
    timerAnimal.toggleClass('dp-none');
    timerThemeList.toggleClass('dp-none');
})

timerBack5.click(function() {
    timerFootball.toggleClass('dp-none');
    timerThemeList.toggleClass('dp-none');
})

//swBack btn
swBack1.click(function() {
    swThemeList.toggleClass('dp-none');
    list.toggleClass('dp-none');
})

swBack2.click(function() {
    swClassic.toggleClass('dp-none');
    swThemeList.toggleClass('dp-none');
})

swBack3.click(function() {
    swNature.toggleClass('dp-none');
    swThemeList.toggleClass('dp-none');
})

swBack4.click(function() {
    swAnimal.toggleClass('dp-none');
    swThemeList.toggleClass('dp-none');
})

swBack5.click(function() {
    swFootball.toggleClass('dp-none');
    swThemeList.toggleClass('dp-none');
})


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
    var i = (Math.floor(Math.random()*9));
    wsOut.innerHTML=[wsArr[i]];

