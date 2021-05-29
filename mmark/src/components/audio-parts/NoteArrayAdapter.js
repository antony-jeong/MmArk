const NoteArrayAdapter = (audioPlayer) => {
  const player = audioPlayer;
  const noteToStopper = {};
  return {
    play: (notes) => {
      const prevNotes = Object.keys(noteToStopper);
      for (var i in prevNotes) {
        const note = prevNotes[i];
        if (!notes.includes(note)) {
          noteToStopper[note].stop();
          delete noteToStopper[note];
        }
      }
      for (var i in notes) {
        const note = notes[i];
        if (!prevNotes.includes(note)) {
          noteToStopper[note] = player.play(note);
        }
      }
    }
  };
};

export default NoteArrayAdapter;
