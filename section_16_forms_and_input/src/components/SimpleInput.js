import {useRef, useState} from "react";
import {blur} from "@testing-library/user-event/dist/blur";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    }
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value; //from ref

    // nameInputRef.current.value = ''; => NOT GOOD, DON'T MANIPULATE DOM
    // setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
               type='text'
               id='name'
               onChange={nameInputChangeHandler}
               value={enteredName}
               onBlur={nameInputBlurHandler}
        />
      </div>
      {nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
