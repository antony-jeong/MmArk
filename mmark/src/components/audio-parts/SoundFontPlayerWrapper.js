import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayerStopper = () => {
  return {
    stop: () => {},
  };
};

const NullSoundFontPlayer = () => {
  return {
    play: () => {
      return NullSoundFontPlayerStopper();
    },
    stop: () => {},
  };
};

const SoundFontPlayerWrapper = () => {
  const audioContext = AudioContext && new AudioContext();
  let soundFontPlayer = NullSoundFontPlayer();
  return {
    init: (instrumentName) => {
      SoundFontPlayer.instrument(audioContext, instrumentName, {gain: 7,})
        .then((player) => {soundFontPlayer = player;})
        .catch(() => {soundFontPlayer = NullSoundFontPlayer();});
    },
    play: (note) => {
      return soundFontPlayer.play(note);
    },
    stop: () => {
      soundFontPlayer.stop();
    },
  };
};

export default SoundFontPlayerWrapper;
