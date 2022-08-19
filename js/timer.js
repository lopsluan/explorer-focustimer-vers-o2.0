import Sounds from "./sounds.js";

export const Timer = ({ minutesDisplay, secondsDisplay }) => {
  let timerTimeOut;
  const minutes = Number(minutesDisplay.textContent);
  let newMinutes = minutes;

  const updateDisplay = (newMinutes, newSeconds) => {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    if (newSeconds || newSeconds === 0)
      secondsDisplay.textContent = String(newSeconds).padStart(2, "0");
  };

  const stop = () => {
    reset();
  };

  const reset = () => {
    newMinutes = 25;
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  };

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(newMinutes, 0);

      if (isFinished) {
        reset();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --newMinutes;
      }

      updateDisplay(newMinutes, String(seconds - 1));

      countdown();
    }, 1000);
  };

  const addFiveMinutes = () => {
    newMinutes += 5;
    updateDisplay(newMinutes);
  };

  const lessFiveMinutes = () => {
    if (newMinutes < 5) {
      newMinutes = 0;
    } else {
      newMinutes -= 5;
    }
    updateDisplay(newMinutes);
  };

  const hold = () => {
    clearTimeout(timerTimeOut);
  };

  return {
    lessFiveMinutes,
    addFiveMinutes,
    countdown,
    hold,
    stop,
  };
};
