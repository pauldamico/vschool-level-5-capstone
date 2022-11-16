import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanSunday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "sunday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateSundayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  }

  function updateSundayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateSundayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }
  console.log(props.sunday.sundayBreakfastTitle)
  return (
    <div>
      <h1>Sunday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.sunday.sundayBreakfastTitle}
            img={props.sunday.sundayBreakfastImg}
            recipe={props.sunday.sundayBreakfastRecipe}
            onClick={updateSundayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.sunday.sundayLunchTitle}
          img={props.sunday.sundayLunchImg}
          recipe={props.sunday.sundayLunchRecipe}
          onClick={updateSundayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.sunday.sundayDinnerTitle}
          img={props.sunday.sundayDinnerImg}
          recipe={props.sunday.sundayDinnerRecipe}
          onClick={updateSundayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
