let time = 18;
const timer = document.getElementById("timer");

setInterval(() => {
if(time > 0){
time--;

let seconds = time.toString().padStart(2,"0");
timer.innerText = `00:${seconds}`;
}
},1000);
