var seconds = 0;
var timerId;

var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");

function startEnable(){
  start.disabled = false;
};

function updateTime(){
    seconds++;
    timer.textContent = "Time elapsed: " + seconds + " sec.";
}

start.addEventListener("click", function(){
  console.log("start");
  timerId = setInterval(updateTime, 1000);
  this.disabled = true;
});

pause.addEventListener("click", function(){
  console.log("pause");
  clearInterval(timerId);
  startEnable();
});

reset.addEventListener("click", function(){
  console.log("reset");
  clearInterval(timerId);
  seconds = 0;
  timer.textContent = "Stop Watch";
  startEnable();
});
