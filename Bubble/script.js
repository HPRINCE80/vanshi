var timer = 10;
var score = 0;
var ghit = 0;
function inscore() {
    score += 10;
    document.querySelector("#Score").textContent = score;
}

function bubble() {
    var culter = "";
    for (var i = 0; i < 160; i++) {
        var rn = Math.floor(Math.random() * 10);
        culter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = culter;
}
function runTimer() {
    var timerint = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector("#interval").innerText = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".pbtm").innerHTML = `<h1>Time's Up!</h1>`;
            
        }
        
    }, 1000);
}

function getNewHit(){
    ghit = Math.floor(Math.random()*10);
    document.querySelector('#hvtial').textContent = ghit;
}
document.querySelector(".pbtm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === ghit){
        inscore();
        bubble();
        getNewHit();
    }
    else {
        document.querySelector(".pbtm").innerHTML = `<h1>YOU LOSE</h1>`
    }
   
});
runTimer();
bubble();
getNewHit();
