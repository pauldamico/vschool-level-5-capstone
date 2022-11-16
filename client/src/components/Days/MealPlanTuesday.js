import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanTuesday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "tuesday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateTuesdayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  }

  function updateTuesdayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateTuesdayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }

  return (
    <div>
      <h1>Tuesday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.tuesday.tuesdayBreakfastTitle}
            img={props.tuesday.tuesdayBreakfastImg}
            recipe={props.tuesday.tuesdayBreakfastRecipe}
            onClick={updateTuesdayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.tuesday.tuesdayLunchTitle}
          img={props.tuesday.tuesdayLunchImg}
          recipe={props.tuesday.tuesdayLunchRecipe}
          onClick={updateTuesdayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.tuesday.tuesdayDinnerTitle}
          img={props.tuesday.tuesdayDinnerImg}
          recipe={props.tuesday.tuesdayDinnerRecipe}
          onClick={updateTuesdayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
