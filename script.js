let time = 18;

const timer = document.getElementById("timer");

setInterval(() => {

if(timer && time > 0){

time--;

timer.innerText = `00:${time.toString().padStart(2,"0")}`;

}

},1000);
