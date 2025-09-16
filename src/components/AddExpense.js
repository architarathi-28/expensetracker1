import React, { useState } from 'react';
import { addExpense } from '../services/api';
import './AddExpense.css';

function AddExpense({ onAdd }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.amount ||
      isNaN(form.amount) ||
      !form.category.trim() ||
      !form.date
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }

    await addExpense(form);
    setForm({ title: '', amount: '', category: '', date: '' });
    onAdd();
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} />
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpense;