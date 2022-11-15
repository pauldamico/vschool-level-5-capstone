import React, { useState } from "react";
import MealPlanUpdate from "./MealPlanUpdate";
export default function MealPlanDay(props) {
  const [toggleEditBreakfast, setToggleEditBreakfast] = useState(false);
  const [toggleEditLunch, setToggleEditLunch] = useState(false);
  const [toggleEditDinner, setToggleEditDinner] = useState(false);

  function editBreakFast() {
    props.onClick(props.id);
    setToggleEditBreakfast(!toggleEditBreakfast);
    console.log(toggleEditBreakfast);
  }
  function editLunch() {
    props.onClick(props.id);
    setToggleEditLunch(!toggleEditLunch);
  }
  function editDinner() {
    props.onClick(props.id);
    setToggleEditDinner(!toggleEditDinner);
  }

  const listUserRecipes = props.currentUserRecipes.map((recipe) => (
    <MealPlanUpdate key={recipe.recipeId} recipeTitle={recipe.recipeTitle} recipeImg={recipe.recipeImg} id={props.id} recipeId={recipe.recipeId}/>
  ));

  return (
    <div>
        <div>
      <button onClick={editBreakFast}>Update Breakfast</button>
      {!toggleEditBreakfast && (
        <div>
          <h1>BreakFast</h1>
          <section>{props.breakfastTitle}</section>
          <h3>{props.breakfastRecipe}</h3>
          <p>{props.breakfastImg}</p>
        </div>
      )}
      {toggleEditBreakfast && <div className ="mealplan-list-div">
      <button onClick={editBreakFast}>Cancel</button>
        {listUserRecipes}</div>}
      <button onClick={editLunch}>Update Lunch</button>
      {!toggleEditLunch && (
        <div>
          <h1>Lunch</h1>
          <section>{props.lunchTitle}</section>
          <h3>{props.lunchRecipe}</h3>
          <p>{props.lunchImg}</p>
        </div>
      )}
       {toggleEditLunch && <div className ="mealplan-list-div">
        <button onClick={editLunch}>Cancel</button>
        {listUserRecipes}</div>}
       
      <button onClick={editDinner}>Update Dinner</button>
      {!toggleEditDinner && (
        <div>
          <h1>Dinner</h1>
          <section>{props.dinnerTitle}</section>
          <h3>{props.dinnerRecipe}</h3>
          <p>{props.dinnerImg}</p>
        </div>
      )}
       {toggleEditDinner && <div className ="mealplan-list-div">
        <button onClick={editDinner}>Cancel</button>
        {listUserRecipes}</div>}
    </div>
    </div>
  );
}
