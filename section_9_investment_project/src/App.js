import {Form} from "./components/Form";
import {Results} from "./components/Results";
import {useState} from "react";
import {Header} from "./components/Header";

function App() {

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const data = [];

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      data.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(...data);

    // do something with yearlyData ...
  };


  return (
    <div>
      <Header/>
      <Form/>
      {yearlyData.length === 0 && <p className="info">No data yet.</p>}
      {yearlyData.length > 0 && <Results/>}
    </div>
  );
}

export default App;
