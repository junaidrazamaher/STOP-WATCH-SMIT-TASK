var min = 0
var sec = 0
var msec = 0
var minHeading = document.getElementById('min')
var secHeading = document.getElementById('sec')
var msecHeading = document.getElementById('msec')
var interval
var round = 1
var prevMin = 00 
var prevSec = 00
var prevMsec = 00 
var startBtn = document.getElementById('startBtn')
var pauseBtn = document.getElementById('pauseBtn')
var lapBtn = document.getElementById('lapBtn')
var resetBtn = document.getElementById('resetBtn')

function timer() {
    msec++
    msecHeading.innerHTML = msec
    if(msec > 99){
        sec++
        msec = 0
        if(sec < 10){
        secHeading.innerHTML = "0" + sec
        } 
        else{
        secHeading.innerHTML = sec
        } 
    }
    if(sec >= 60){           
        min++
        sec = 0
        if(min < 10){
        minHeading.innerHTML = "0" + min
        }
        else{
        minHeading.innerHTML = min
        }
    }
    if(min >= 60){
        min = 0
        minHeading.innerHTML = min
    }    
}

function start() {
    interval = setInterval(timer,10)
    startBtn.disabled = true        
    pauseBtn.disabled = false        
    lapBtn.disabled = false        
    resetBtn.disabled = false        
}

function pause(){
    clearInterval(interval)
    startBtn.disabled = false        
    pauseBtn.disabled = true        
    lapBtn.disabled = false        
    resetBtn.disabled = false        
}

function lap(){
    clearInterval(interval)
    var para = document.createElement('p')
    var diffMin = min - prevMin
    var diffSec = sec - prevSec
    var diffMsec = msec - prevSec
    // console.log(diffMin,diffSec,diffMsec)
    var text = document.createTextNode("Lap " + round + ", " + " " + min + ": " + sec + "." + msec + " +" + diffMin + ": " + diffSec + ". " + diffMsec)
    para.appendChild(text)
    para.setAttribute("class","mx-3")
    var data = document.getElementById('data')
    data.insertBefore(para, data.childNodes[0]); 
    round++
    prevMin = min
    prevSec = sec
    prevMsec = msec
    start()
}

function reset(){
    min = 0
    sec = 0
    msec = 0
    clearInterval(interval)
    minHeading.innerHTML = "0" + min
    secHeading.innerHTML = "0" + sec
    msecHeading.innerHTML = "0" + msec
    var data = document.getElementById('data')
    data.innerHTML = ""        
    startBtn.disabled = false        
    pauseBtn.disabled = false
    round = 1        
}   