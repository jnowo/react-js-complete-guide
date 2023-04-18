import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from "react";

export default function ExpensesList(props) {

  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());

  const yearFilterChangeHandler = (year) => {
    setYearFilter(year);
    console.log('Year changed: ' + year);
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selectedYear={yearFilter} onYearChange={yearFilterChangeHandler}/>
        {props.expenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>
        })}
      </Card>
    </div>
  )
}