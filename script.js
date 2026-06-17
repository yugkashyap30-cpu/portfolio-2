let time = 18;
const timer = document.getElementById("timer");

/* ⏱ TIMER */
setInterval(() => {
if(time > 0){
time--;
let seconds = time.toString().padStart(2,"0");
timer.innerText = `00:${seconds}`;
}
},1000);


/* ⭐ STAR CANVAS */
const canvas = document.createElement("canvas");
canvas.id = "stars";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<120;i++){
stars.push({
x: Math.random()*canvas.width,
y: Math.random()*canvas.height,
r: Math.random()*2,
d: Math.random()*1
});
}

function drawStars(){
ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

for(let i=0;i<stars.length;i++){
let s = stars[i];

ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();

s.y += s.d;

if(s.y > canvas.height){
s.y = 0;
s.x = Math.random()*canvas.width;
}
}

/* shooting star */
if(Math.random() < 0.03){
ctx.strokeStyle="#8b5cf6";
ctx.beginPath();
ctx.moveTo(Math.random()*canvas.width,0);
ctx.lineTo(Math.random()*canvas.width+80,80);
ctx.stroke();
}

requestAnimationFrame(drawStars);
}

drawStars();

/* resize fix */
window.addEventListener("resize",()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
