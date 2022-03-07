import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            // pull out data and add them into new object
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            {/* how to make child component can communicate with parent component */}
            <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div> 
    ) 
}; 

export default NewExpense;