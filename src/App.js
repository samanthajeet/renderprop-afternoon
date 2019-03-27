import React, { Component } from 'react'
import './App.css'

import CurrencyConverter from './CurrencyConverter'
// import CurrencyDisplay from './Components/CurrencyDisplay' alternatively we can use the CurrencyDisplay component rather than inline JSX. We would need to pass an amount and currency prop

class App extends Component {
	render() {
		return (
			<>
				<h2>Render Props</h2>
				<CurrencyConverter
					render={(currencyData, amount) => (
						<p>
							US Dollar ${amount.toFixed(2)} - {currencyData.name}{' '}
							{currencyData.symbol}
							{(amount * currencyData.rate).toFixed(2)}
						</p>
					)}
				/>
			</>
		)
	}
}

export default App;