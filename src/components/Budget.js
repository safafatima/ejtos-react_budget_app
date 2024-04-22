import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const { value } = event.target
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:</span>
            <span style={{ marginLeft: '1 rem' }}>{currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;