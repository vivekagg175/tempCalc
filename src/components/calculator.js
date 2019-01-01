import React, { Component } from "react";
import TemperatureInput from "./temperatureInput";
import BoilingVerdict from "./boilingVerdict";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c"
  };

  handleChange(temperature) {
    this.setState({ temperature });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale={scaleNames["c"]}
          temperature={celsius}
          onTempChange={this.handleChange.bind(this)}
        />
        <TemperatureInput
          scale={scaleNames["f"]}
          temperature={fahrenheit}
          onTempChange={this.handleChange.bind(this)}
        />
        <BoilingVerdict temperature={celsius} />
      </div>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;
