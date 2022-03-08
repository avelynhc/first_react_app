import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setSelectedFilter(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
            selected={selectedFilter}
            onExpenseFilter={filterChangeHandler}
          />
        <ExpenseChart expense={filteredExpenses} />
        <ExpenseList item={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
