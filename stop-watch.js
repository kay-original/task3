'use strict';
const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let runtime = 0;
let timeoutId;

function startState(){
  start.disabled= true;
  runtime++;
  
  let min = Math.floor(runtime / 100 / 60);
  let sec = Math.floor(runtime / 100);
  let ms = Math.floor(runtime) % 100;
  
  if (min < 10){
    min = '0'+min;
  }
  if (sec >= 60){
    sec = sec % 60;
  }
  if (sec < 10){
    sec = '0'+sec;
  }
  if (ms < 10){
    ms = '0'+ms;
  }
  
  time.innerHTML = min + ":" + sec +"." + ms;

  timeoutId = setTimeout(startState,10);
}
  
function stopState(){
  clearTimeout(timeoutId);
  start.disabled=false;
}

function resetState(){
  clearTimeout(timeoutId);
  runtime = 0;
  time.innerHTML = "00:00.00";
  start.disabled=false;
}

start.addEventListener('click', startState); // STARTボタン
stop.addEventListener('click', stopState); // STOPボタン
reset.addEventListener('click', resetState); // RESETボタン

