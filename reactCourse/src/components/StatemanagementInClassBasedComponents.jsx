import { Component } from "react";

class StateManagementInClassBasedComponents extends Component {
    state = {
        showText: false,
        changeColor: false
    };

    handleClick = () => {
        const { showText, changeColor } = this.state;
        this.setState({
            showText: !showText,
            changeColor: !changeColor,
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>State Management In Class Based Components</h1>
                <button onClick={this.handleClick}>
                    Toggle Text
                </button>
                {this.state.showText ? (
                    <p style={{ color: this.state.changeColor ? 'red' : 'black' }}>
                        This text is toggled on/off based on button click.
                    </p>
                ) : null}
            </div>
        );
    }
}

export default StateManagementInClassBasedComponents;
