/**
 * @author dyminki
 */
import React from "react";
/** TypingText Component */
export default class TypingText extends React.Component {
  /**
   * Create component.
   * @param {Object} props - string or array
   */
  constructor(props) {
    super(props);
    this.text = this.props.text;
    this.state = {
      text: ""
    };
  }
  /**
   * Lifecycle method.
   * Indicates what method to use for props text.
   */
  componentDidMount() {
    if (typeof this.text === "string") {
      this.startSentence(this.text);
    } else {
      this.startSentenses(this.text);
    }
  }
  /**
   * Clearing state - helper method.
   */
  clearState() {
    this.setState({
      text: ""
    });
  }
  /**
   * Pausing execusion by given time - helper method.
   * @param {number} time - number
   * @return {Promise} Promise returned after given time.
   */
  pause(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  /**
   * Return value as a Promise.
   * @param {string} x - letter
   * @return {Promise} Promise representing given value.
   */
  returnVal(x) {
    return new Promise(resolve => {
      resolve(x);
    });
  }
  /**
   * Add text from props to state async.
   * @async
   * @param {string} sentence - sentence
   * @return {Promise} Promise representing fully displayed sentence.
   */
  sentence(sentence) {
    return new Promise(async resolve => {
      let str = "";
      for (const letter of sentence.split("")) {
        await this.pause(this.props.speed);
        let result = await this.returnVal(letter);
        str += result;

        this.setState({
          text: str
        });
      }
      resolve();
    });
  }
  /**
   * Writing a sentence letter by letter with or without delay.
   * @async
   * @param {string} sentence - sentence
   */
  async startSentence(sentence) {
    await this.pause(this.props.delay);
    await this.sentence(sentence);
  }
  /**
   * Writing an array of sentences letter by letter with delay between and optional startDelay.
   * @async
   * @param {Array} sentencesArray - array od sentences
   */
  async startSentenses(sentencesArray) {
    setTimeout(async () => {
      for (const sen of sentencesArray) {
        await this.pause(this.props.delay);
        await this.clearState();
        await this.sentence(sen);
      }
    }, this.props.startDelay);
  }
  /**
   * Component render method.
   * @return {div} Elemnt with text from state.
   */
  render() {
    return <div> {this.state.text} </div>;
  }
}

export { TypingText };