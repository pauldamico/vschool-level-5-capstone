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
  console.log(props.monday.mondayBreakfastTitle)
  return (
    <div>
      <h1>Monday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.monday.mondayBreakfastTitle}
            img={props.monday.mondayBreakfastImg}
            recipe={props.monday.mondayBreakfastRecipe}
            onClick={updateMondayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.monday.mondayLunchTitle}
          img={props.monday.mondayLunchImg}
          recipe={props.monday.mondayLunchRecipe}
          onClick={updateMondayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.monday.mondayDinnerTitle}
          img={props.monday.mondayDinnerImg}
          recipe={props.monday.mondayDinnerRecipe}
          onClick={updateMondayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
