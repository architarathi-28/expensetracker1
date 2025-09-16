import React from 'react';
import './SummarySection.css';

function SummarySection({ expenses }) {
  // Filter out invalid entries
  const validExpenses = expenses.filter(
    (exp) => exp.amount && !isNaN(exp.amount) && exp.category
  );

  // Calculate total amount
  const total = validExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  // Group by category
  const byCategory = validExpenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  return (
    <div className="summary-section">
      <h3>Total Spent: ₹{total}</h3>
      <ul>
        {Object.entries(byCategory).map(([cat, amt]) => (
          <li key={cat}>
            {cat}: ₹{amt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SummarySection;