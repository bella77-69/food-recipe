import React from "react";
import Meal from "./Meal";

const Meals = ({ meals }) => {
  return (
    <div className="container">
      <div className="row">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;
