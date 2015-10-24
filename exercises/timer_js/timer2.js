var timer = {
  seconds: 0,
  timerId: 0,

  elements: {
    timer: document.getElementById("timer"),
    start: document.getElementById("start"),
    pause: document.getElementById("pause"),
    reset: document.getElementById("reset")
  },

  startEnable: function startEnable(){
    this.elements.start.disabled = false;
  },

  updateTime: function updateTime(){
    this.seconds++;
    this.elements.timer.textContent = "Time elapsed: " + this.seconds;
  },

  listeners: function(){
    this.elements.start.addEventListener("click", function(){
      console.log("start");
      this.elements.timer.textContent = "Time elapsed: " + this.seconds;
      this.timerId = setInterval(this.updateTime.bind(this), 1000);
      this.disabled = true;
    }.bind(this));

    this.elements.pause.addEventListener("click", function(){
      console.log("pause");
      clearInterval(this.timerId);
      this.startEnable;
    }.bind(this));

    this.elements.reset.addEventListener("click", function(){
      console.log("reset");
      this.seconds = 0;
      clearInterval(this.timerId);
      this.elements.timer.textContent = "Stop Watch";
      this.startEnable;
    }.bind(this));
  }
}

timer.listeners();
