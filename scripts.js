// SELECIONANDO ELEMENTO
const start = document.querySelector('#start')
const pause = document.querySelector('#pause')
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
  start.innerText = "Iniciar";
  time = setInterval(timer, 1000);
})

pause.addEventListener('click', () => {
  clearInterval(time);
  start.innerText = "Retomar";
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

