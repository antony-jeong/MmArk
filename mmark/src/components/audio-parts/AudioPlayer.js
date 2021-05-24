import SoundFontPlayer from "soundfont-player";
import AudioContext from "./AudioContext";

const NullSoundFontPlayer = {
  play: note => {},
  stop: () => {}
};

const AudioPlayer = () => {
  //Audio Context
  const audioContext = AudioContext && new AudioContext();

  //soundPlayer
  let soundPlayer = NullSoundFontPlayer;

  //setInstrument
  const Player = {
    setInstrument(instrumentName) {
      SoundFontPlayer.instrument(audioContext, instrumentName)
        .then(soundfontPlayer => {
          soundPlayer = soundfontPlayer;
        })
        .catch(e => {
          soundPlayer = NullSoundFontPlayer;
        });
    },
    playNote(note) {
      soundPlayer.play(note);
    },
    stopNote() {
      soundPlayer.stop();
    }
  };
  return Player;
};

export default AudioPlayer;
