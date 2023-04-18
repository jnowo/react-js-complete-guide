import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {

  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
  }

  const filteredExpenses = props.expenses.filter(exp => exp.date.getFullYear() === Number.parseInt(yearFilter))


  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={yearFilter} onYearChange={yearFilterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}