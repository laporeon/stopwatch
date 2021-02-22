// SELECIONANDO ELEMENTO
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
const stop = document.querySelector('#stop')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')


// DECLARANDO VARIÁVEIS
let mili = 0;
let second = 0;
let minute = 0;
let hour = 0;
let time;

start.addEventListener('click', () => {
  time = setInterval(timer, 1000);
  start.innerText = "Iniciar";
})

pause.addEventListener('click', () => {
  clearInterval(time);
  start.innerText = "Retomar";
})

stop.addEventListener('click', () => {
  mili = 0;
  second = 0;
  minute = 0;
  hour = 0;
  clearInterval(time);
  seconds.innerText = "00";
  minutes.innerText = "00";
  hours.innerText = "00";
  start.innerText = "Iniciar";
})


function timer(){
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  second < 10 ? seconds.innerText = `0${second}` : seconds.innerText = `${second}`;
  minute < 10 ? minutes.innerText = `0${minute}` : minutes.innerText = `${minute}`;
  hour < 10 ? hours.innerText = `0${hour}` : hours.innerText = `${hour}`;
}

