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
    play: (note) => {
      return soundPlayer.play(note);
    },
    stop: () => {
      soundPlayer.stop();
    }
  };
}

export default SoundPlayer;
