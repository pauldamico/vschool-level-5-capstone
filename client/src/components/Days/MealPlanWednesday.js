import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanWednesday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "wednesday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateWednesdayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  }

  function updateWednesdayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateWednesdayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }
  console.log(props.wednesday.wednesdayBreakfastTitle)
  return (
    <div>
      <h1>Wednesday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.wednesday.wednesdayBreakfastTitle}
            img={props.wednesday.wednesdayBreakfastImg}
            recipe={props.wednesday.wednesdayBreakfastRecipe}
            onClick={updateWednesdayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.wednesday.wednesdayLunchTitle}
          img={props.wednesday.wednesdayLunchImg}
          recipe={props.wednesday.wednesdayLunchRecipe}
          onClick={updateWednesdayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.wednesday.wednesdayDinnerTitle}
          img={props.wednesday.wednesdayDinnerImg}
          recipe={props.wednesday.wednesdayDinnerRecipe}
          onClick={updateWednesdayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
