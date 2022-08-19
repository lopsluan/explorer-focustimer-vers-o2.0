import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay,
  buttonPause,
} from "./elements.js";

import { Control } from "./controls.js";
import { Timer } from "./timer.js";
import { Events } from "./events.js";
import Sounds from "./sounds.js";

const control = Control({
  buttonPlay,
  buttonPause,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
});

const sound = Sounds();

Events({ control, timer, sound });
