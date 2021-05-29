import { Component } from "react";
import NoteArrayPlayer from "./NoteArrayPlayer";

class InstrumentAudioComponent extends Component {
  // props: instrument, notes
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    this.noteArrayPlayer = NoteArrayPlayer();
    this.init();
    this.play();
  }

  componentDidUpdate(prevProps) {
    if (this.props.instrumentName !== prevProps.instrumentName) {
      this.setInstrument();
    }
    if (this.props.notes.length !== prevProps.notes.length) {
      this.play();
    } else {
      for (var i in this.props.notes) {
        if (this.props.notes[i] !== prevProps.notes[i]) {
          this.play();
          break;
        }
      }
    }
  }

  init() {
    this.noteArrayPlayer.init(this.props.instrumentName);
  }

  play() {
    this.noteArrayPlayer.play(this.props.notes);
  }

  render() {
    return (<></>);
  }
}

InstrumentAudioComponent.defaultProps = {
  instrumentName: "acoustic_grand_piano",
  notes: [],
};

export default InstrumentAudioComponent;
