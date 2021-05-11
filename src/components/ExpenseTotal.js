import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='alert alert-danger p-4'>
			<span>Expenditure: GH₵{total}</span>
		</div>
	);
};

export default ExpenseTotal;
