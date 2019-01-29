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
      <div>
        <TypingText text="Hey! I can type myself! Do You like it?" speed="90" />
        <TypingText
          text={manyLines}
          speed="90"
          delay="1000"
          startDelay="3200"
        />
      </div>
    );
  }
}

export { App };
