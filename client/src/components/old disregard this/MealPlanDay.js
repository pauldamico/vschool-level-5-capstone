import React, { useState } from "react";
import MealPlanUpdate from "./MealPlanUpdate";
import BreakLunchDinner from "./BreakLunchDinner";
export default function MealPlanDay(props) {
  const [toggleEditBreakfast, setToggleEditBreakfast] = useState(false);
  const [toggleEditLunch, setToggleEditLunch] = useState(false);
  const [toggleEditDinner, setToggleEditDinner] = useState(false);

  function editBreakFast() {
    //toggles the edit button for breakfast
    // props.onClick(props.id);
    setToggleEditBreakfast(!toggleEditBreakfast);
    console.log(toggleEditBreakfast);
  }
  function editLunch() {
    //toggles the edit button for lunch
    // props.onClick(props.id);
    setToggleEditLunch(!toggleEditLunch);
  }
  function editDinner() {
    //toggles the edit button for dinner
    // props.onClick(props.id);
    setToggleEditDinner(!toggleEditDinner);
  }

  const listUserRecipes = props.currentUserRecipes.map((recipe) => (
    <MealPlanUpdate
      dinnerTitle={props.dinnerTitle}
      dinnerRecipe={props.dinnerRecipe}
      dinnerImg={props.dinnerImg}
      sundayOnClick={props.sundayOnClick}
      mondayOnClick={props.mondayOnClick}
      key={recipe.recipeId}
      recipeTitle={recipe.recipeTitle}
      recipeImg={recipe.recipeImg}
      id={props.id}
      recipeId={recipe.recipeId}
    />
  ));

  return (
    <div>
      <div>
        <button onClick={editBreakFast}>Update Breakfast</button>
        {!toggleEditBreakfast && (
          <div>
            <h1>BreakFast</h1>
            <BreakLunchDinner
              img={props.breakfastImg}
              title={props.breakfastTitle}
              recipe={props.breakfastRecipe}
            />
          </div>
        )}
        {toggleEditBreakfast && (
          <div className="mealplan-list-div">
            <button onClick={editBreakFast}>Cancel</button>
            <div onClick={editBreakFast}>{listUserRecipes}</div>
          </div>
        )}
        <button onClick={editLunch}>Update Lunch</button>
        {!toggleEditLunch && (
          <div>
            <h1>Lunch</h1>
            <BreakLunchDinner
            img={props.lunchImg}
              title={props.lunchTitle}
              recipe={props.lunchRecipe}
              />
            {/* <section>{props.lunchTitle}</section>
            <h3>{props.lunchRecipe}</h3>
            <p>{props.lunchImg}</p> */}
          </div>
        )}
        {toggleEditLunch && (
          <div className="mealplan-list-div">
            <button onClick={editLunch}>Cancel</button>
            <div onClick={editLunch}>{listUserRecipes}</div>
          </div>
        )}

        <button onClick={editDinner}>Update Dinner</button>
        {!toggleEditDinner && (
          <div>
            <h1>Dinner</h1>
            <BreakLunchDinner
              img={props.dinnerImg}
              title={props.dinnerTitle}
              recipe={props.dinnerRecipe}
            ></BreakLunchDinner>

            {/* <section>{props.dinnerTitle}</section>
            <h3>{props.dinnerRecipe}</h3>
            <p>{props.dinnerImg}</p> */}
          </div>
        )}
        {toggleEditDinner && (
          <div className="mealplan-list-div">
            <button onClick={editDinner}>Cancel</button>
            <div onClick={editDinner}>{listUserRecipes}</div>
          </div>
        )}
      </div>
    </div>
  );
}
