import {React, memo} from "react";
import Piano from "./audio-parts/Piano.js";
import "./PianoInstance.css";
import styled from "styled-components";

const StyledAlwaysScrollSection = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      /* 세로 스크롤 넓이 */
      width: 0px;
  
      /* 가로 스크롤 높이 */
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
    }
  `;
const AlwaysScrollSection = memo(props => {
    const { children } = props;
    return <StyledAlwaysScrollSection>{children}</StyledAlwaysScrollSection>;
  });

function PianoContainer({children, focusNow, getFocusNow}) {
  return (
    <div className={"piano-container-wrapper"}>
      {/* <AlwaysScrollSection> */}
      <div
        className={"piano-container"+(focusNow==="p"?" focused":"")}
        onClick={getFocusNow}
        onMouseDown={event => event.preventDefault()}
      >
        {children}
      </div>
      {/* </AlwaysScrollSection> */}
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

const PianoInstance = ({startNote, endNote, keyToNote, inputMode, addPlayHistory, focusNow, getFocusNow}) => {
  return (
    <PianoContainer focusNow={focusNow} getFocusNow={getFocusNow}>
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
