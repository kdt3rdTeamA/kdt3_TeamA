    // const form= document.querySelector('.timerForm');
    const clk= document.querySelector('#startClk');
    clk.addEventListener('click', function (event) {
        console.log('click');
        event.preventDefault();
            
        const daysIp = parseInt(document.querySelector('input[name="days"]').value);
        const hoursIp = parseInt(document.querySelector('input[name="hours"]').value);
        const minutesIp = parseInt(document.querySelector('input[name="minutes"]').value);
        const secondsIp = parseInt(document.querySelector('input[name="seconds"]').value);

        strat(secondsIp, minutesIp, hoursIp, daysIp);
    });

//========================================================================
var saveT;
var day = 0;
var hr = 0; 
var min = 0;
var sec = 0;
    function strat(secIp, minIp, hrIp, dayIp){
        var time = secIp + minIp*60 + hrIp*3600 + dayIp*3600*24;
        if(saveT>0){
            time=saveT;    
        }        
        //시작 버튼 비활성화
        startClk.disabled = true;
        document.getElementById("startClk").style.cursor = 'not-allowed';
        document.querySelector("#pauseClk").style.cursor = 'pointer'
        document.querySelector("#resetClk").style.cursor = 'pointer'
        pauseClk.disabled = false;
        resetClk.disabled = false;

        var x = setInterval(function() {
            day= parseInt((time/(60*60*24))%(60*60*24));
            hr= parseInt((time/3600)% 3600%24);
            min = parseInt((time/60)% 60);
            sec = parseInt(time%60);

            document.getElementById("demo").innerHTML = day + "일" + hr + "시" + min + "분" + sec + "초";
            time--;

            //타임아웃 시
            if (time < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Time Out";
                startClk.disabled = false;
                pauseClk.disabled = true;
                document.getElementById("pauseClk").style.cursor = 'not-allowed';
                document.getElementById("startClk").style.cursor = 'pointer';
            }
        }, 1000); //1초 마다 실행

            document.getElementById('pauseClk').addEventListener('click', ()=>{
                saveT = time;
                clearInterval(x);
                document.querySelector("#startClk").style.cursor = 'pointer';
                document.querySelector("#pauseClk").style.cursor = 'not-allowed';
                pauseClk.disabled = true;
                startClk.disabled = false;
            });
            document.getElementById('resetClk').addEventListener('click', ()=>{
                clearInterval(x);
                document.getElementById("startClk").style.cursor = 'pointer';


                startClk.disabled = false;
                pauseClk.disabled = true;
                resetClk.disabled =  true;
                
                document.querySelector("#pauseClk").style.cursor = 'not-allowed';
                document.querySelector("#resetClk").style.cursor = 'not-allowed';
                time = 0;
                saveT = 0;
                document.getElementById("demo").innerHTML = "<strong>Reset !!!</strong>";
                  console.log('reset');
            });
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
