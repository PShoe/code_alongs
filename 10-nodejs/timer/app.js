var timer = {
  seconds: 0,
  timerId: null,
  elems: {
    startButton: document.querySelector('#start'),
    displayH1: document.querySelector('#display'),
    stopButton: document.querySelector('#stop'),
    resetButton: document.querySelector('#reset')
  },
  init: function(){
    this.elems.startButton.addEventListener('click', () => {
      this.timerId = setInterval( () => {
        this.seconds++
        this.elems.displayH1.textContent = this.seconds
      }, 1000)
    })
    this.elems.stopButton.addEventListener('click', () => {
      clearInterval(this.timerId)
    })
    this.elems.resetButton.addEventListener('click', () => {
      this.seconds = 0;
      this.elems.displayH1.textContent = this.seconds;
    })
  }
}


timer.init();
