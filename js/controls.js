export const Control = ({ buttonPlay, buttonPause }) => {
  const play = () => {
    buttonPlay.classList.toggle("hide");
    buttonPause.classList.toggle("hide");
  };

  const reset = () => {
    buttonPlay.classList.remove("hide");
    buttonPause.classList.add("hide");
  };

  return {
    play,
    reset,
  };
};
