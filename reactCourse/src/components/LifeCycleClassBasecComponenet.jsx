import { Component } from 'react';

class LifeCycleClassComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      showText: !prevState.showText,
      changeColor: !prevState.changeColor,
    }));
  };

  // Birth
  componentDidMount() {
    console.log("✅ componentDidMount: Component has been mounted.");
    // Simulate auto-toggle on mount
    this.setState((prevState) => ({
      showText: !prevState.showText,
      changeColor: !prevState.changeColor,
    }));
  }

  // grow
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.showText !== this.state.showText ||
      prevState.changeColor !== this.state.changeColor
    ) {
      console.log("🔄 componentDidUpdate: State has been updated.");
    }
  }

  // death
  componentWillUnmount() {
    console.log("❌ componentWillUnmount: Component will be removed.");
  }

  render() {
    const { showText, changeColor } = this.state;

    return (
      <div>
        <h1>Lifecycle in Class-Based Components</h1>
        <button onClick={this.handleClick}>Toggle Text</button>
        {showText && (
          <p style={{ color: changeColor ? 'red' : 'black' }}>
            This text is toggled on/off based on button click.
          </p>
        )}
      </div>
    );
  }
}

export default LifeCycleClassComponent;
