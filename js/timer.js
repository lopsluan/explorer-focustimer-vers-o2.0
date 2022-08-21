import Sounds from "./sounds.js";

export const Timer = ({ minutesDisplay, secondsDisplay }) => {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  const stop = () => {
    reset();
  };

  const reset = () => {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  };

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        reset();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  };

  const addFiveMinutes = () => {
    minutes = Number(minutes) + 5;
    updateDisplay(minutes);
  };

  const lessFiveMinutes = () => {
    if (minutes < 5) {
      minutes = 0;
    } else {
      minutes -= 5;
    }
    updateDisplay(minutes);
  };

  const hold = () => {
    clearTimeout(timerTimeOut);
  };

  function updateMinutes(newMinute) {
    minutes = newMinute;
  }

  return {
    lessFiveMinutes,
    addFiveMinutes,
    countdown,
    hold,
    stop,
    updateDisplay,
    updateMinutes,
    reset,
  };
};
