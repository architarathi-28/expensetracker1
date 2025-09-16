import React from 'react';
import { deleteExpense } from '../services/api';
import './ExpenseList.css';

function ExpenseList({ expenses, onDelete }) {
  const handleDelete = async (id) => {
    await deleteExpense(id);
    onDelete();
  };

  return (
    <div className="expense-list">
      {expenses.map((expense) => (
        <div key={expense._id} className="expense-item">
          <span>{expense.title}</span>
          <span>₹{expense.amount}</span>
          <span>{expense.category}</span>
          <span>{new Date(expense.date).toLocaleDateString('en-IN')}</span>
          <button onClick={() => handleDelete(expense._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;