import SoundFontPlayerWrapper from "./SoundFontPlayerWrapper";
import NoteArrayAdapter from "./NoteArrayAdapter";

const NoteArrayPlayer = () => {
  const soundFontPlayerWrapper = SoundFontPlayerWrapper();
  const noteArrayAdapter = NoteArrayAdapter(soundFontPlayerWrapper);
  return {
    init: (instrumentName) => soundFontPlayerWrapper.init(instrumentName),
    play: (notes) => noteArrayAdapter.play(notes),
  };
};

export default NoteArrayPlayer;
