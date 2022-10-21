const form1= document.querySelector('#lottoDraw');
const form2= document.querySelector('#numDraw');
var arr=[];

form1.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('lottoPrint').innerHTML = "";
    document.getElementById("printBox1").style.display = 'inline-block';


    const lines = document.querySelector('input[name="lotto"]').value;
    console.log('CLk L');

    for(var i=0; i<lines; i++){
    arr=draw(45, 6, 1);
    document.getElementById('lottoPrint').innerHTML +='<span style="color: black"> '+(i+1)+' line</span>';
        for(var j=0; j<arr.length; j++){
            if(0<arr[j] && arr[j] < 11){
                document.getElementById('lottoPrint').innerHTML +=  " <span class='numCir' style='background-color:#fac400;''>" +arr[j]+ "</span>";
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
    document.getElementById('lottoPrint').innerHTML +="<br><br>";
    }   
});
form2.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('numPrint').innerHTML = "";
    document.getElementById("printBox2").style.display = 'inline-block';


    const min = document.querySelector('input[name="NrangeStart"]').value;
    const max = document.querySelector('input[name="NrangeEnd"]').value;
    const drawNum = document.querySelector('input[name="Nsetting"]').value;
    console.log('CLk N');
    arr = draw(max ,drawNum, min);  
    for(i=1; i < arr.length+1; i++){
    document.getElementById('numPrint').innerHTML += '[ ' + arr[i-1] + '   ] ' ;  
    if(i%5===0) {
    document.getElementById('numPrint').innerHTML += '<hr>' ;  
    }
    }
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