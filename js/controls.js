export const Control = ({
  buttonPlay,
  buttonPause,
  buttonSoundRain,
  buttonSoundForest,
  buttonSoundFire,
  buttonSoundCoffeeShop,
  buttonStop,
  buttonSet,
}) => {
  const play = () => {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
    buttonStop.classList.remove("hide");
    buttonSet.classList.add("hide");
  };

  const reset = () => {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
    buttonStop.classList.add("hide");
    buttonStop.classList.add("hide");
    buttonSet.classList.remove("hide");
  };

  const selectButtonSoundRain = () => {
    buttonSoundRain.classList.toggle("sounds-button-selected");
    buttonSoundForest.classList.remove("sounds-button-selected");
    buttonSoundFire.classList.remove("sounds-button-selected");
    buttonSoundCoffeeShop.classList.remove("sounds-button-selected");
  };
  const selectButtonSoundForest = () => {
    buttonSoundRain.classList.remove("sounds-button-selected");
    buttonSoundForest.classList.toggle("sounds-button-selected");
    buttonSoundFire.classList.remove("sounds-button-selected");
    buttonSoundCoffeeShop.classList.remove("sounds-button-selected");
  };
  const selectButtonSoundFire = () => {
    buttonSoundRain.classList.remove("sounds-button-selected");
    buttonSoundForest.classList.remove("sounds-button-selected");
    buttonSoundFire.classList.toggle("sounds-button-selected");
    buttonSoundCoffeeShop.classList.remove("sounds-button-selected");
  };
  const selectButtonSoundCoffeeShop = () => {
    buttonSoundRain.classList.remove("sounds-button-selected");
    buttonSoundForest.classList.remove("sounds-button-selected");
    buttonSoundFire.classList.remove("sounds-button-selected");
    buttonSoundCoffeeShop.classList.toggle("sounds-button-selected");
  };

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }

    return newMinutes;
  }

  return {
    play,
    reset,
    selectButtonSoundRain,
    selectButtonSoundForest,
    selectButtonSoundFire,
    selectButtonSoundCoffeeShop,
    getMinutes,
  };
};
