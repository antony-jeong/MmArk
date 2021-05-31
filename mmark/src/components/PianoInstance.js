import React from "react";
import Piano from "./audio-parts/Piano.js";
import "./PianoInstance.css";

function PianoContainer({children}) {
  return (
    <div className={"piano-container-wrapper"}>
      <div
        className={"piano-container"}
        onMouseDown={event => event.preventDefault()}
      >
        {children}
      </div>
    </div>
  );
}

function BlackKey({isPlaying, text, eventHandlers, isDisabled}) {
  if (isDisabled) {
    return (
      <div className={"piano-black-key-wrapper"}>
        <div className={"piano-black-key-disabled"}/>
      </div>
    );
  }
  return (
    <div className={"piano-black-key-wrapper"}>
      <div
        className={`piano-black-key ${
          isPlaying ? "piano-black-key-playing" : ""
        }`}
        {...eventHandlers}
      >
        <div className={"piano-black-key-text"}>{text}</div>
      </div>
    </div>
  );
}

function WhiteKey({isPlaying, text, eventHandlers, isDisabled}) {
  if (isDisabled) {
    return (
      <div
        className={"piano-white-key-disabled"}
      >
      </div>
    );
  }
  return (
    <div
      className={`piano-white-key ${
        isPlaying ? "piano-white-key-playing" : ""
      }`}
      {...eventHandlers}
    >
      <div className={"piano-white-key-text"}>{text}</div>
    </div>
  );
}

function PianoKeyComponent({isAccidental, isPlaying, play, stop, keyBindings, isDisabled}) {
  const KeyComponent = isAccidental ? BlackKey : WhiteKey;

  if (isDisabled) {
    return (
      <KeyComponent
        isDisabled={true}
      />
    );
  }

  function handleMouseEnter(e) {
    if (e.buttons) {
      play();
    }
  }

  const eventHandlers = {
    onMouseDown: play,
    onMouseEnter: handleMouseEnter,
    onTouchStart: play,
    onMouseUp: stop,
    onMouseOut: stop,
    onTouchEnd: stop,
  };

  return (
    <KeyComponent
      isPlaying={isPlaying}
      text={keyBindings.join(" / ")}
      eventHandlers={eventHandlers}
      isDisabled={false}
    />
  );
}

const PianoInstance = ({startNote, endNote, keyToNote, inputMode, addPlayHistory}) => {
  return (
    <PianoContainer>
      <Piano
        startNote={startNote}
        endNote={endNote}
        renderer={PianoKeyComponent}
        inputMode={inputMode}
        keyToNote={keyToNote}
        addPlayHistory={addPlayHistory}
      />
    </PianoContainer>
  );
}

export default PianoInstance;
