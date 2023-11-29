let min = 0;
let hr = 0;
let seg = 0;
let idInterval;
const btnIniciar = document.querySelector(".btnIniciar");
const btnPausar = document.querySelector(".btnPausar");
const btnReiniciar = document.querySelector(".btnReset");
const cronometro = () => {
  const parrafoCronometro = document.querySelector(".parrafoCronometro");
  seg++;
  if(seg < 10){
    seg = '0'+ seg;
  }
  if (seg === 60) {
    seg = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  parrafoCronometro.innerHTML = `${hr} : ${min} : ${seg}`;
};
const pausar = () =>{
  clearInterval(idInterval);
}
const reiniciar = () =>{
    const parrafoCronometro = document.querySelector(".parrafoCronometro");
  clearInterval(idInterval);
  hr = 0;
  min = 0;
  seg = 0;
  parrafoCronometro.innerHTML = `00:00:00`;
}
btnIniciar.addEventListener("click", () =>{idInterval = setInterval(cronometro,1000)});
btnPausar.addEventListener('click', pausar);
btnReiniciar.addEventListener('click', reiniciar);