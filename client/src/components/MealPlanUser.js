import React, { useState, useContext } from "react";
import { RecipeListContext } from "../recipeListContext";


export default function MealPlanUser(props) {
  const { selectMealPlanUser } = useContext(RecipeListContext);

  const [currentUser, setCurrentUser] = useState({});

  function updateSelectUser() {
    props.updateDinnerMeal(props.mealPlan, props._id);
    props.showUser();
  }

  return (
    <div>
      <li onClick={updateSelectUser}>{props.name}</li>
    </div>
  );
}
