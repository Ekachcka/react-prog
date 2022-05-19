import React from "react";
import Buttons from "./buttons";
import ChangeStep from "./ChangeStep";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 1,

      intervalId: null,
    };
    this.isRendered = true;
  }

  componentDidMount() {
    if (this.isRendered) {
      this.isRendered = false;
      return;
    }
    if (!this.state.intervalId) {
      this.autoClick();
      setTimeout(() => {
        this.toggleAutoClick();
        this.setState({
          intervalId: null,
        });
      }, 30000);
    }
  }

  componentWillUnmount() {
    this.toggleAutoClick();
  }

  changeStep = (changeStepHowMuch) => {
    this.setState({
      step: changeStepHowMuch,
    });
  };

  counterIncrecse = () => {
    this.setState((oldState) => ({
      counter: oldState.counter + oldState.step,
    }));
  };

  autoClick = () => {
    if (!this.state.intervalId) {
      const intervalId = setInterval(() => {
        this.counterIncrecse();
        this.setState({
          intervalId,
        });
      }, 1000);
    }
  };

  toggleAutoClick = () => {
    if (!!this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: null,
      });
    }
  };
  render() {
    const { counter, step } = this.state;
    return (
      <>
        <p>{counter}</p>;
        <Buttons
          step={step}
          autoClick={this.autoClick}
          counterIncrecse={this.counterIncrecse}
        />
        <ChangeStep step={step} changeStep={this.changeStep} />
      </>
    );
  }
}
export default Clicker;
