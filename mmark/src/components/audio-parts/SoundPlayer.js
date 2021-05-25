import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const nullSoundFontPlayer = {
  play: (note) => {return {stop: () => {}};},
  stop: () => {}
};

const SoundPlayer = () => {
  const audioContext = AudioContext && new AudioContext();
  let soundPlayer = nullSoundFontPlayer;
  return {
    setInstrument: (instrumentName) => {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then(soundfontPlayer => {
          soundPlayer = soundfontPlayer;
        })
        .catch(e => {
          soundPlayer = nullSoundFontPlayer;
        });
    },
    play: (note, isLoud) => {
      return soundPlayer.play(note, audioContext.currentTime, {gain: (isLoud ? 1 : 0.5)});
    },
    stop: () => {
      soundPlayer.stop();
    }
  };
}

export default SoundPlayer;
