import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanMonday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "monday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateMondayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  
  }

  function updateMondayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateMondayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }
 
  return (
    <div>
      <h1>Monday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.mondayBreakfast.title}
            img={props.mondayBreakfast.img}
            recipe={props.mondayBreakfast.recipe}
            onClick={updateMondayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.mondayLunch.title}
          img={props.mondayLunch.img}
          recipe={props.mondayLunch.recipe}
          onClick={updateMondayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.mondayDinner.title}
          img={props.mondayDinner.img}
          recipe={props.mondayDinner.recipe}
          onClick={updateMondayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
