import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name, cost) => {
        const expense = {
            name,
            cost,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name, 10)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={event=> increaseAllocation(props.name, -10)}></FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;