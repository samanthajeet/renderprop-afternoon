import React, { Component } from "react";


class Currency extends Component {
  state = {
    currencyChosen: false,
    selectedCurrency: "Select Currency",
    amount: 0
  };

  handleAmountIncrease = () => {
    this.setState(prevState => {
      return {
        amount: (prevState.amount += 1)
      };
    });

  };

  handleAmountDecrease = () => {
    this.setState(prevState => {
      return {
        amount: (prevState.amount -= 1)
      };
    });
  };

  handleOptionSelect = evt => {
    console.log('changed')
    const userValue = evt.target.value;
    this.setState(() => {
      return {
        selectedCurrency: userValue,
        currencyChosen: userValue === "Select Currency" ? false : true
      }
    })
  };

  render() {
    const currencyData = [
      { name: "Japanese Yen", symbol: "¥", rate: 113.6 },
      { name: "British Pound", symbol: "£", rate: 0.77 },
      { name: "Canadian Dollar", symbol: "CAD", rate: 1.32 },
      { name: "Mexican Peso", symbol: "Mex$", rate: 20.41 },
      { name: "Swiss Franc", symbol: "Fr.", rate: 1.01 }
    ];

    let currencyOptions = currencyData.map((currency, index) => {
      return (
        <option key={index} value={index}>
          {currency.name}
        </option>
      );
    });
    return (
      <div>
        <select value={this.state.selectedCurrency} onChange={this.handleOptionSelect}>
          <option value="Select Currency" >
            Select Currency
          </option>
          {currencyOptions}
        </select>
        <div>
          <button className="add" onClick={this.handleAmountIncrease}>
            {" "}
            +{" "}
          </button>
          <button className="minus" onClick={this.handleAmountDecrease}>
            {" "}
            -{" "}
          </button>
        </div>
        {this.state.currencyChosen ? (
          this.props.render(
            currencyData[this.state.selectedCurrency],
            this.state.amount
          )
        ) : (
          <p>please select currency</p>
        )}

      </div>
    );
  }
}


export default Currency
