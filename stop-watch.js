'use strict';
const time = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startMs;
let timeoutId;
let runtime= 0;
function countUp() {
  const d = new Date(Date.now() - startMs + runtime);
  const m = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  const ms = String(d.getMilliseconds()).padStart(3, '0');
  
  time.textContent = `${m}:${s}:${ms}`;
  
  timeoutId = setTimeout(()=>{
    countUp();
  },10);
}
start.addEventListener('click', ()=>{
  startMs = Date.now();
  countUp();
});

stop.addEventListener('click', ()=>{
  clearTimeout(timeoutId);
  runtime += Date.now() - startMs;
});

reset.addEventListener('click', ()=>{
  time.textContent = '00:00.000';
  runtime = 0;
});

function buttonStateBase() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.add('inactive');
}
function buttonStateStart() {
  start.classList.add('inactive');
  stop.classList.remove('inactive');
  reset.classList.add('inactive');
}
function buttonStateStop() {
  start.classList.remove('inactive');
  stop.classList.add('inactive');
  reset.classList.remove('inactive');
}

buttonStateBase();

start.addEventListener('click', ()=>{
  if (start.classList.contains('inactive')===true){
    return;
  }
  buttonStateStart();
  startMs = Date.now();
  countUp();
});

stop.addEventListener('click', ()=>{
  if (stop.classList.contains('inactive')===true){
    return;
  }
  buttonStateStop();
  clearTimeout(timeoutId);
  runtime += Date.now() - startMs;
});

reset.addEventListener('click', ()=>{
  if (reset.classList.contains('inactive')===true){
    return;
  }
  buttonStateBase();
  time.textContent = '00:00.000';
  runtime = 0;
});