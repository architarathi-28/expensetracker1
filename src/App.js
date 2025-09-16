import React, { useEffect, useState } from 'react';
import { getExpenses } from './services/api';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import SummarySection from './components/SummarySection';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses();
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <AddExpense onAdd={fetchExpenses} />
      <ExpenseList expenses={expenses} onDelete={fetchExpenses} />
      <SummarySection expenses={expenses} />
    </div>
  );
}

export default App;