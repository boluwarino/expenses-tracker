//imports
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//state variable to determine if user is editing form or not
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    //handler function to save form data
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    //handler to start editing state
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    //handler to stop editing state
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    //using the && operator returns the expression or statement after checking the condtion is fulfilled. this is a hack. 
    return (
        <div className='new-expense'>

            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;