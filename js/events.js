import {
  buttonLess,
  buttonPlay,
  buttonPlus,
  buttonSoundCoffeeShop,
  buttonSoundFire,
  buttonSoundForest,
  buttonSoundRain,
  buttonStop,
  buttonPause,
  buttonSet,
} from "./elements.js";

export const Events = ({ sound, timer, control }) => {
  buttonPlay.addEventListener("click", () => {
    control.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", () => {
    control.play();
    timer.hold();
    sound.pressButton();
  });

  buttonPlus.addEventListener("click", () => {
    timer.addFiveMinutes();
    sound.pressButton();
  });

  buttonLess.addEventListener("click", () => {
    timer.lessFiveMinutes();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", () => {
    timer.stop();
    control.reset();
    sound.pressButton();
  });

  buttonSoundForest.addEventListener("click", () => {
    sound.toggleAudio(sound.forestAudio);
    sound.rainAudio.pause();
    sound.coffeeShopAudio.pause();
    sound.rainAudio.pause();
    sound.pressButton();
    control.selectButtonSoundForest();
  });
  buttonSoundRain.addEventListener("click", () => {
    sound.toggleAudio(sound.rainAudio);
    sound.forestAudio.pause();
    sound.coffeeShopAudio.pause();
    sound.fireAudio.pause();
    sound.pressButton();
    control.selectButtonSoundRain();
  });
  buttonSoundCoffeeShop.addEventListener("click", () => {
    sound.toggleAudio(sound.coffeeShopAudio);
    sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.fireAudio.pause();
    sound.pressButton();
    control.selectButtonSoundCoffeeShop();
  });
  buttonSoundFire.addEventListener("click", () => {
    sound.toggleAudio(sound.fireAudio);
    sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.coffeeShopAudio.pause();
    sound.pressButton();
    control.selectButtonSoundFire();
  });
  buttonSet.addEventListener("click", function () {
    let newMinutes = control.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
};
