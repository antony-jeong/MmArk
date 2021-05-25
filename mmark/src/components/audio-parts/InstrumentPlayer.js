import SoundPlayer from "./SoundPlayer";

const InstrumentPlayer = () => {
  const soundPlayer = SoundPlayer();
  const playingNotesToStoppers = {};
  return {
    setInstrument(instrumentName) {
      soundPlayer.setInstrument(instrumentName);
    },
    updatePlayingNotes(playingNotes){
      const prevPlayingNotes = Object.keys(playingNotesToStoppers);
      prevPlayingNotes.forEach((note) => {
        if (!playingNotes.includes(note)) {
          playingNotesToStoppers[note].stop();
          delete playingNotesToStoppers[note];
        }
      });
      playingNotes.forEach((note) => {
        if (!prevPlayingNotes.includes(note)) {
          playingNotesToStoppers[note] = soundPlayer.play(note);
        }
      });
    }
  };
};

export default InstrumentPlayer;
