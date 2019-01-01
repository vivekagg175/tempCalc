import React, { Component } from "react";

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in :{scale}</legend>
        <input
          value={temperature}
          onChange={e => this.props.onTempChange(e.target.value)}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
