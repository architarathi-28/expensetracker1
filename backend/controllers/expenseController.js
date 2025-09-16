const Expense = require('../models/Expense');

const getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

const addExpense = async (req, res) => {
  const newExpense = new Expense(req.body);
  await newExpense.save();
  res.json(newExpense);
};

const deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Expense deleted' });
};

module.exports = { getExpenses, addExpense, deleteExpense };