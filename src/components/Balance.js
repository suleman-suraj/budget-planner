import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
	const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

	return (
		<div class={`alert p-4 ${alertType}`}>
			<span>Balance: GH₵{budget - totalExpenses}</span>
		</div>
	);
};

export default Balance;
