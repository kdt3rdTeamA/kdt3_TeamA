    // const form= document.querySelector('.timerForm');
    const clk= document.querySelector('#startClk');
    clk.addEventListener('click', function (event) {
        console.log('click');
        event.preventDefault();

            
        const daysIp = document.querySelector('input[name="days"]').value;
        const hoursIp = document.querySelector('input[name="hours"]').value;
        const minutesIp = document.querySelector('input[name="minutes"]').value;
        const secondsIp = document.querySelector('input[name="seconds"]').value;

        strat(secondsIp, minutesIp, hoursIp, daysIp);
    });

//========================================================================

    function strat(secIp, minIp, hrIp, dayIp){
        var time = parseInt(secIp) + parseInt(minIp)*60 + parseInt(hrIp)*3600 + parseInt(dayIp)*3600*24;
        var day = "";
        var hr = ""; 
        var min = "";
        var sec = "";

        //시작 버튼 비활성화
        startClk.disabled = true;
        document.getElementById("startClk").style.cursor = 'not-allowed';

        restartClk.disabled = true;
        document.querySelector("#restartClk").style.cursor = 'not-allowed';
        var x = setInterval(function() {
            day= parseInt((time/(60*60*24))%(60*60*24));
            hr= parseInt((time/3600)% 3600%24);
            min = parseInt((time/60)% 60);
            sec = parseInt(time%60);
            // min = parseInt(min % 60);

            document.getElementById("demo").innerHTML = day + "일" + hr + "시" + min + "분" + sec + "초";
            time--;

            //타임아웃 시
            if (time < 0) {
                clearInterval(x); //setInterval() 실행을 끝냄
                startClk.disabled = false;
                restartClk.disabled = false;
                document.getElementById("demo").innerHTML = "Time Out";
            }

            //버튼 클릭 이벤트
            document.getElementById('pauseClk').addEventListener('click', ()=>{
                var saveT = time;
                console.log(saveT);
                clearInterval(x);
                restartClk.disabled = false;

                
                document.getElementById('restartClk').addEventListener('click', ()=>{
                        var y= setInterval(function() {
                        startClk.disabled = true;
                        restartClk.disabled = true;
                        
                        day= parseInt((saveT/(60*60*24))%(60*60*24));
                        hr= parseInt((saveT/3600)% 3600%24);
                        min = parseInt((saveT/60)% 60);
                        sec = parseInt(saveT%60);

                        document.getElementById("demo").innerHTML = day + "일" + hr + "시" + min + "분" + sec + "초";
                        saveT--; 
                        if (saveT < 0) {
                            clearInterval(y);
                            document.getElementById("demo").innerHTML = "Time Out";
                            startClk.disabled = false;
                            
                        }
                        document.getElementById('resetClk').addEventListener('click', ()=>{
                            clearInterval(y);
                            startClk.disabled = false;
                            time = "";
                            document.getElementById("demo").innerHTML = "<strong>Reset !!!</strong>";
            console.log('y reset');

                        });
            console.log('run y');

                    }, 1000);
                });
            });
            document.getElementById('resetClk').addEventListener('click', ()=>{
                clearInterval(x);
                var y;
                clearInterval(y);
                document.getElementById("startClk").style.cursor = 'pointer';


                startClk.disabled = false;

                time = "";
                document.getElementById("demo").innerHTML = "<strong>Reset !!!</strong>";
            });
            console.log('run x');
        }, 1000); //1초 마다 실행
    }