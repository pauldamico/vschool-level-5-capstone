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
            title={props.tuesdayBreakfast.title}
            img={props.tuesdayBreakfast.img}
            recipe={props.tuesdayBreakfast.recipe}
            onClick={updateTuesdayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.tuesdayLunch.title}
          img={props.tuesdayLunch.img}
          recipe={props.tuesdayLunch.recipe}
          onClick={updateTuesdayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.tuesdayDinner.title}
          img={props.tuesdayDinner.img}
          recipe={props.tuesdayDinner.recipe}
          onClick={updateTuesdayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
