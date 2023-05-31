import styles from './AvailableMeals.module.css';
import {Card} from "../UI/Card";
import {MealItem} from "./MealItem/MealItem";
import {useEffect, useState} from "react";


export const AvailableMeals = (params) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-hooks-b996c-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        })
      }
      setMeals(loadedMeals);
    };
    fetchMeals();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <section className={styles.MealsLoading}><p>Loading...</p></section>
  }

  const mealsList = meals.map(meal =>
    <MealItem id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}/>
  );


  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )

}