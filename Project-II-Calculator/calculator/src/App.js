import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import OperatorButton from './components/ButtonComponents/OperatorButton';

const App = () => {
	return (
		<div className="calculator-container">
			<CalculatorDisplay props="0" />
			<div className="btns-container">
				<ActionButton props="clear" />
				<OperatorButton props="&divide;" />

				<NumberButton props="7" />
				<NumberButton props="8" />
				<NumberButton props="9" />
				<OperatorButton props="&times;" />

				<NumberButton props="4" />
				<NumberButton props="5" />
				<NumberButton props="6" />
				<OperatorButton props="-" />

				<NumberButton props="1" />
				<NumberButton props="2" />
				<NumberButton props="3" />
				<OperatorButton props="+" />

				<ActionButton props="0" />
				<OperatorButton props="=" />
			</div>
		</div>
	);
};

export default App;
