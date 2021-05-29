import React, { Component, Fragment } from "react";
import InstrumentAudioComponent from "./InstrumentAudioComponent";

const isRegularKey = (e) => {
  return !e.ctrlKey && !e.metaKey && !e.shiftKey;
};

class InstrumentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playingNotes: [],
    };
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  play(note) {
    this.setState(({playingNotes}) => ({playingNotes: [...playingNotes, note],}));
  }

  stop(note) {
    this.setState(({playingNotes}) => ({playingNotes: playingNotes.filter(playingNote => playingNote !== note),}));
  }

  getNoteFromKey(key) {
    return this.props.keyToNote[key.toUpperCase()];
  }

  handleKeyDown(e) {
    if (isRegularKey(e) && !e.repeat) {
      const note = this.getNoteFromKey(e.key);
      if (note) {
        this.play(note);
      }
    }
  }

  handleKeyUp(e) {
    if (isRegularKey(e)) {
      const note = this.getNoteFromKey(e.key);
      if (note) {
        this.stop(note);
      }
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    window.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    const renderer = this.props.renderer;
    const instrumentName = this.props.instrumentName;
    const playingNotes = this.state.playingNotes;
    return (
      <Fragment>
        {renderer({playingNotes: playingNotes, play: this.play, stop: this.stop,})}
        <InstrumentAudioComponent instrumentName={instrumentName} notes={playingNotes} />
      </Fragment>
    );
  }
}

InstrumentComponent.defaultProps = {keyToNote: {}, instrumentName: "acoustic_grand_piano",};

export default InstrumentComponent;
