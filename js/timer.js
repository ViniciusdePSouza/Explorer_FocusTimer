export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    resetControls,
}) {

    function resetTimer(){
        updateTimerDisplay(minutes, seconds)
        clearTimeout(timerTimeOut)
      }
      
      function updateTimerDisplay(upMinutes, upSeconds) {
        minutesDisplay.textContent = String(upMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(upSeconds).padStart(2, "0")
      }
      
      function countdown(){
        timerTimeOut = setTimeout(function() {
          let seconds =  Number(secondsDisplay.textContent)
          let minutes = Number(minutesDisplay.textContent)
      
          updateTimerDisplay(minutes, 0)
      
          
          
          if (minutes <= 0) {
          resetControls()
          return
        }
          
          if( seconds <= 0 ) {
            seconds = 60
            --minutes
          }
          updateTimerDisplay(minutes, String(seconds - 1))
      
          countdown()
        }, 1000)
      }

      return {
        countdown,
        resetTimer
      }
}
