let timerId;
let time = 0;
const stopwatch = document.getElementById("stopwatch");
const stopTime = document.getElementById('stopTime');
let  hour, min, sec;


function printTime() {
    time++;
    stopwatch.innerText = getTimeFormatString();
}

//시계 시작 - 재귀호출로 반복실행
function startClock() {
    printTime();
    stopClock();
    timerId = setTimeout(startClock, 1000);
}

//시계 중지
function stopClock() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

// 시계 초기화
function resetClock() {
    stopClock()
    stopwatch.innerText = "00:00:00";
    time = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString() {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}

function clickCloud() {
    Swal.fire({
        title: '안녕하세요! 이스터에그입니다.',
        text: '저희 프로젝트 이용해주셔서 감사합니다.',
        imageUrl: '/static/img/egg.PNG',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      });
}


