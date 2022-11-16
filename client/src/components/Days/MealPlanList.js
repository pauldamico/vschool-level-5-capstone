import React, { useState } from "react";
import MealPlanUpdate from "./MealPlanUpdate";
import axios from "axios";
export default function MealPlanList(props) {
  const [currentRecipes, setCurrentRecipes] = useState([]);
const [toggle, setToggle] = useState(false)
function toggler (){
  setToggle(!toggle)
}

  const listOfRecipes = currentRecipes.map((recipe) => (
    <MealPlanUpdate
  
    id={props.id}
      recipeImg={recipe.recipeImg}
      recipeId={recipe.recipeId}
      recipeTitle={recipe.recipeTitle}
      onClick={props.onClick}
      key={recipe.recipeId}
    ></MealPlanUpdate>
  ));

  function getUserRecipes() {
    axios
      .get(`/recipes/${props.id}`)
      .then((res) => setCurrentRecipes((prev) => res.data));
      toggler()
  }

  return (
  <div>
      <div >
        <button onClick={getUserRecipes} >Select Meal</button>
    { toggle &&<div onClick={toggler}>       
      {listOfRecipes}
      </div>}
      {props.children}
      <h3>{props.title}</h3>
      <img src={props.img} />
      <p>{props.recipe}</p>
    </div>
    </div>
  );
}
