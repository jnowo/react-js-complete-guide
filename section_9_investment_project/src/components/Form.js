import {useState} from "react";

const initialState = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 10,
};
export const Form = (props) => {

  const [userInput, setUserInput] = useState(initialState);
  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  }

  const resetHandler = () => {
    setUserInput(initialState);
  }

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      }
    });
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('current-savings', event.target.value)} type="number"
                 id="current-savings" value={userInput["current-savings"]}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input onChange={(event) => inputChangeHandler('yearly-contribution', event.target.value)} type="number"
                 id="yearly-contribution" value={userInput["yearly-contribution"]}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={(event) => inputChangeHandler('expected-return', event.target.value)} type="number"
                 id="expected-return" value={userInput["expected-return"]}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(event) => inputChangeHandler('duration', event.target.value)} type="number" id="duration"
                 value={userInput["duration"]}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  )
}