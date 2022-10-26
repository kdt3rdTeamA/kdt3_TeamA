const form1= document.querySelector('#lottoDraw');
const form2= document.querySelector('#numDraw');
const overlap= document.querySelector('#OcheckBox');
const winArr=[7, 16, 24, 27, 37, 44];
const bonusNum=2;
var arr=[];
var overArr=[];
var overCheck=false;
const win = document.querySelectorAll('.printBox> .lottoPrint');
const gem = document.querySelectorAll('h1> .bi-gem');
    var a=setInterval(function(){
    gem[0].classList.toggle('bi-gem-none');
    gem[1].classList.toggle('bi-gem-none');
},500);
form1.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('lottoPrint').innerHTML = "";
    document.getElementById('printBox1').style.display = 'inline-block';
    let cnt=0;
    let bonus=0;
    const lines = document.querySelector('input[name="lotto"]').value;

    for(var i=0; i<lines; i++){
    arr=draw(45, 6, 1);
    document.getElementById('lottoPrint').innerHTML +='<span style="color: black"> '+(i+1)+' line</span>';
        for(var j=0; j<arr.length; j++){
            if(0<arr[j] && arr[j] < 11){
                document.getElementById('lottoPrint').innerHTML +=  " <span class='numCir' style='background-color:#fac400;'>" +arr[j]+ "</span>";
            }
            else if(10<arr[j] && arr[j] < 21) {
                document.getElementById('lottoPrint').innerHTML +=" <span class='numCir' style='background-color:#69c8f2;'>" +arr[j]+ "</span>";
            }
            else if(20<arr[j] && arr[j] < 31) {
                document.getElementById('lottoPrint').innerHTML +=" <span class='numCir' style='background-color:#ff7272;'>" +arr[j]+ "</span>";
            }
            else if(30<arr[j] && arr[j] < 41) {
                document.getElementById('lottoPrint').innerHTML +=" <span class='numCir' style='background-color:#aaaaaa;'>" +arr[j]+ "</span>";
            }
            else if(40<arr[j] && arr[j] < 46) {
                document.getElementById('lottoPrint').innerHTML +=" <span class='numCir' style='background-color:#b0d840;'>" +arr[j]+ "</span>";
            }
        }
    for(var a=0; a<6; a++){
        if(arr[a]===bonusNum){
            bonus++;
        }
        for(var b=0; b<6; b++){
            if(arr[a]===winArr[b]){
                cnt++;
            }
        }
    }
    // console.log(cnt, bonus, 'line=', i);
    if(cnt===3){
        document.getElementById('lottoPrint').innerHTML += ' <br><span style="color:black"><i class="bi bi-arrow-90deg-up"></i>저번주 기준 5등!';
        
    }else if(cnt===4) {
        document.getElementById('lottoPrint').innerHTML += '<br><span style="color:black"><i class="bi bi-arrow-90deg-up"></i>저번주 기준 4등!';
    }else if(cnt===5) {
        document.getElementById('lottoPrint').innerHTML += ' <br><span style="color:black"><i class="bi bi-arrow-90deg-up"></i>저번주 기준 3등!!';
    }else if(cnt===6) {
        document.getElementById('lottoPrint').innerHTML += ' <br><span style="color:black"><i class="bi bi-arrow-90deg-up"></i>저번주 기준 1등!!!!';
        Swal.fire({
            icon: 'success',
            title: '1등!?!!!',
        });
    }else if(cnt===5 && bonus>0){
        document.getElementById('lottoPrint').innerHTML += '<br><span style="color:black"><i class="bi bi-arrow-90deg-up"></i>저번주 기준 2등!!!';
    }
    document.getElementById('lottoPrint').innerHTML +="<br>";
    cnt=0;
    bonus=0;
}
});

form2.addEventListener('click', function (event) {
    event.preventDefault();
    const min = document.querySelector('input[name="NrangeStart"]').value;
    const max = document.querySelector('input[name="NrangeEnd"]').value;
    const drawNum = document.querySelector('input[name="Nsetting"]').value;
    if(Math.abs(max-min+1)<drawNum && overCheck===false) {
            Swal.fire({
                icon: 'error',
                title: '입력값 오류!!!',
                text: '뽑을 수가 입력 수 보다 많습니다.',
            });
    }else if(overCheck===true){
        for (i = 0; i < drawNum; i++) {
            overArr[i] = (Math.floor(Math.random()*parseInt(max-min+1)+parseInt(min-1)+1));
        }
        SelectionSort(overArr);
        document.getElementById("printBox2").style.display = 'inline-block';
        document.getElementById('numPrint').innerHTML = "";
    
        for(i=1; i < (overArr.length)+1; i++){
            document.getElementById('numPrint').innerHTML += '[ ' + overArr[i-1] + '   ] ' ;  
            if(i%5===0) {
            document.getElementById('numPrint').innerHTML += '<hr>' ;  
            }
        }
    }
    else{
        arr = draw(max ,drawNum, min);  
        document.getElementById("printBox2").style.display = 'inline-block';
        document.getElementById('numPrint').innerHTML = "";
        
        for(i=1; i < arr.length+1; i++){
            document.getElementById('numPrint').innerHTML += '[ ' + arr[i-1] + '   ] ' ;  
            if(i%5===0) {
            document.getElementById('numPrint').innerHTML += '<hr>' ;  
            }
        }
    }
    
});
overlap.addEventListener('click', function(){
    overCheck=overlap.checked;
});

function draw(max, draw, min){
    var arr=[max];
    for (i = 0; i < draw; i++) {
        arr[i] = (Math.floor(Math.random()*parseInt(max-min+1)+parseInt(min-1)+1));
        // arr[i] = (Math.floor(Math.random()*max)+1);
        for (var j = 0; j < i; j++) { //중복값 없게
            if (arr[i] === arr[j]) i--;
        }
    }
    SelectionSort(arr);
    return arr;
    
}
function SelectionSort( arr) {
    for (var i = 0; i < arr.length-1 ; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length+1 ;j++) {
            if (arr[j] < arr[min]) min = j;
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
}