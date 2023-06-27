import {Form} from "./components/Form";
import {Results} from "./components/Results";
import {useState} from "react";
import {Header} from "./components/Header";

function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };


  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }


  return (
    <div>
      <Header/>
      <Form onCalculate={calculateHandler}/>
      {!userInput && <p className="info">No data yet.</p>}
      {userInput && <Results data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    </div>
  );
}

export default App;
