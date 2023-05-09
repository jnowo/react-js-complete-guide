import {Header} from "./components/Layout/Header";
import {MealsSummary} from "./components/Meals/MealsSummary";
import {Meals} from "./components/Meals/Meals";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Meals/>
      </main>
    </>);
}

export default App;
