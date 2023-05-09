import {MealsSummary} from "./MealsSummary";
import {Header} from "../Layout/Header";
import {AvailableMeals} from "./AvailableMeals";

export const Meals = () => {
  return (
    <>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  );
}