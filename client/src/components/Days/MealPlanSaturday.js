import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanSaturday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "saturday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateSaturdayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  }

  function updateSaturdayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateSaturdayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }

  return (
    <div>
      <h1>Saturday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.saturday.saturdayBreakfastTitle}
            img={props.saturday.saturdayBreakfastImg}
            recipe={props.saturday.saturdayBreakfastRecipe}
            onClick={updateSaturdayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.saturday.saturdayLunchTitle}
          img={props.saturday.saturdayLunchImg}
          recipe={props.saturday.saturdayLunchRecipe}
          onClick={updateSaturdayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.saturday.saturdayDinnerTitle}
          img={props.saturday.saturdayDinnerImg}
          recipe={props.saturday.saturdayDinnerRecipe}
          onClick={updateSaturdayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
