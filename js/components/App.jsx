import React from "react";
import { TypingText } from "./TypingText.jsx";

class App extends React.Component {
  render() {
    let manyLines = [
      "I can write more than one sentece in one line.",
      "Seriously, I can write more than one sentece in one line.",
      "It's like magic!",
      "No, it's just JavaScript <3",
      "I love it!"
    ];
    return (
      <div className="box">
        <div>
          <TypingText text="Hey! I can type myself! Do you like it?" speed="90" />
        </div>
        <div className="second-text">
          <TypingText
          text={manyLines}
          speed="90"
          delay="1000"
          startDelay="3200"
          />
        </div>
      </div>
    );
  }
}

export { App };
