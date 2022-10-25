let height = 6; // 줄 갯수 
let width = 5; // 단어 길이

let row = 0; // 현재 줄 (attempt #)
let col = 0; // 현재 알파벳 인덱스 
let gameOver = false;
let wordList = ['eject','breed','heavy','sheet','sweet','steam','judge','faint','taste','stool','spare','bitch','block','sharp','young','panel','smile','video','trick','catch','beach','elect','gloom','glide','queen','piano','mouth','enter','fibre','queue','spite','basic','space','range','model','virus','horse','float','asset','torch','trail','utter','shine','donor','grand','glass','clock','shell','angle','elbow','fight','house','cheer','adopt','guess','shout','blame','agree','catch','drive','reply','widen','shake','issue','hurry','spoil','climb','renew','offer','focus','raise','cross','range','learn','going','incur','doubt','match','laugh','drown','flood','react','shine','merge','write','dream','press','limit','voice','cater','spend','throw','shape','teach','exist','award','imply','speed','plant','visit'];
let ranNum = Math.floor(Math.random() * wordList.length);

let word = `${wordList[ranNum].toUpperCase()}`;
// console.log(word);
let descriptBtn = $('.descript');
let descriptContent = $('.descriptContent');
let replayBtn = $('.replay');

window.onload = function () {
    intialize();
}

replayBtn.on('click', function() {
    window.location.reload();
});

descriptBtn.on('click', function() {
    descriptContent.toggleClass('dpnone');
    descriptBtn.toggleClass('dpnone');
})

descriptContent.on('click', function() {
    descriptContent.toggleClass('dpnone');
    descriptBtn.toggleClass('dpnone');
})

function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span>
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }


    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return; 

        // alert(e.code);
        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (col < width) {
                let currTile = document.getElementById(row.toString() + '-' + col.toString());
                if (currTile.innerText == "") {
                    currTile.innerText = e.code[3];
                    col += 1;
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            currTile.innerText = "";
        }

        else if (e.code == "Enter") {
            update();
            row += 1; //start new row
            col = 0; //start at 0 for new row
        }


        if (!gameOver && row == height) {
            Swal.fire('Fail!');
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }

    })
}


function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
            currTile.classList.add("correct");
            correct += 1;
        } // Is it in the word?
        else if (word.includes(letter)) {
            currTile.classList.add("present");
        } // Not in the word
        else {
            currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
            Swal.fire('Correct!');
        }

    }
}