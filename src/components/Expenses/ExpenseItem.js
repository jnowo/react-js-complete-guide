import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
import {click} from "@testing-library/user-event/dist/click";

const ExpenseItem = (props) => {

  let title = props.title;

  const clickHandler = () => {
    title = 'Updated!';
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate
        date={props.date}
      />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>)
}

export default ExpenseItem;