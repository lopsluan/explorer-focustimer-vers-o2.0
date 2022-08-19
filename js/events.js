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
    sound.forestAudio.play();
    sound.rainAudio.pause();
    sound.coffeeShopAudio.pause();
    sound.rainAudio.pause();
    sound.pressButton();
  });
  buttonSoundRain.addEventListener("click", () => {
    sound.forestAudio.pause();
    sound.rainAudio.play();
    sound.coffeeShopAudio.pause();
    sound.fireAudio.pause();
    sound.pressButton();
  });
  buttonSoundCoffeeShop.addEventListener("click", () => {
    sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.coffeeShopAudio.play();
    sound.fireAudio.pause();
    sound.pressButton();
  });
  buttonSoundFire.addEventListener("click", () => {
    sound.forestAudio.pause();
    sound.rainAudio.pause();
    sound.coffeeShopAudio.pause();
    sound.fireAudio.play();
    sound.pressButton();
  });
};
