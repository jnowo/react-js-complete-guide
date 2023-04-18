import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";

export default function ExpensesList(props) {

  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
  }

  const filteredExpenses = props.expenses.filter(exp => exp.date.getFullYear() === Number.parseInt(yearFilter))

  let expenseContetnt = <p>No expense found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContetnt = filteredExpenses.length > 0 &&
      filteredExpenses.map(expense => {
        return <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
      })
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={yearFilter} onYearChange={yearFilterChangeHandler}/>
        {expenseContetnt}
      </Card>
    </div>
  )
}