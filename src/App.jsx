import React from "react";
import "./App.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  return (
    <>
      <div className="container">
        <h2>Speech to text convertor</h2>
        <br />
        <p>
          A React hook that convert speech from microphone to text and make it
          available for you to use!
        </p>
        <div className="main-content"></div>
        <div className="btn-style">
          <button>Copy</button>
          <button>Start listening</button>
          <button>Stop listening</button>
        </div>
      </div>
    </>
  );
};

export default App;
