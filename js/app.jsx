import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
require("../scss/main.scss");

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
         
        this.state = {
            text: this.props.text,
            speed: this.props.speed,
            delay: this.props.delay ? this.props.delay : 0,
            reversed: this.props.reversed,
            counter: this.props.reversed ? this.props.text.length : 0,
        }
    }

    componentDidMount() {
        this.setTimeOutId = setTimeout ( () => {
            this.setIntervalId = setInterval( () => {
                let temp = this.state.reversed ? this.state.counter -1: this.state.counter + 1;
                this.setState({
                    counter: temp
                });
                if(this.state.counter === this.state.text.length){
                    clearInterval(this.setIntervalId)
                }else if (this.state.counter === 0){
                    clearInterval(this.setIntervalId)
                }
            }, this.state.speed);
        }, this.state.delay);
    }
    componentWillUnmount() {
        clearInterval(this.setInterval);
        clearTimeout(this.setTimeOutId);
    }
    render(){
        let typingText = typeof this.state.text === 'string' ? this.state.text.substr(0,this.state.counter): this.state.text.map( el => el.substr(0, el.length));
        return <div>{typingText}</div>
    }
}

class App extends React.Component {
    render() {
        
        return <div>
        <TextTyper text="Hey! I can type myself! Do You like it?" speed="100" reversed={false} />
        <TextTyper text="I can write more than one sentece in one line." speed="100" delay="3000" reversed={false} />
        
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});