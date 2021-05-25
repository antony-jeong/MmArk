import React, { Fragment, useEffect, useRef } from "react";
import InstrumentPlayer from "./InstrumentPlayer";

const InstrumentAudio = ({playingNotes = [], instrumentName = "acoustic_grand_piano"}) => {
  const instrumentPlayer = useRef(InstrumentPlayer());

  useEffect(() => {
    instrumentPlayer.current.setInstrument(instrumentName);
    instrumentPlayer.current.updatePlayingNotes(playingNotes);
  });

  useEffect(() => {
    instrumentPlayer.current.setInstrument(instrumentName);
  }, [instrumentName]);

  useEffect(() => {
    instrumentPlayer.current.updatePlayingNotes(playingNotes);
  }, [playingNotes]);

  return (<Fragment />);
};

export default InstrumentAudio;
