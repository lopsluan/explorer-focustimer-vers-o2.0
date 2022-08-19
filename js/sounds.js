export default () => {
  const forestAudio = new Audio("Audios/Floresta.wav");
  const rainAudio = new Audio("Audios/Chuva.wav");
  const coffeeShopAudio = new Audio("Audios/Cafeteria.wav");
  const fireAudio = new Audio("Audios/Lareira.wav");
  const buttonPressAudio = new Audio("Audios/audios_button-press.wav");
  const kitchenTimer = new Audio("Audios/audios_kichen-timer.mp3");

  forestAudio.loop = true;
  rainAudio.loop = true;
  coffeeShopAudio.loop = true;
  fireAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return {
    forestAudio,
    rainAudio,
    coffeeShopAudio,
    fireAudio,
    timeEnd,
    pressButton,
  };
};
