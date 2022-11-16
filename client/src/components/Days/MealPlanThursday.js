import React, { useState, useContext } from "react";
import MealPlanList from "./MealPlanList";
import { RecipeListContext } from "../../recipeListContext";
export default function MealPlanThursday(props) {

  const { updateMealPlan } = useContext(RecipeListContext);
  const day = "thursday"
  const dinner = "Dinner"
  const lunch ="Lunch"
  const breakfast = "Breakfast"

  function updateThursdayDinner(id, dinnerTitle, dinnerImg, dinnerRecipe) {
    props.updateToDatabase(id, dinnerTitle, dinnerImg,dinnerRecipe, day, dinner );
  }

  function updateThursdayLunch(id, lunchTitle, lunchImg, lunchRecipe) {
    props.updateToDatabase(id, lunchTitle, lunchImg,lunchRecipe, day, lunch); 
  }

  function updateThursdayBreakfast(
    id,
    breakfastTitle,
    breakfastImg,
    breakfastRecipe
  ) {
    props.updateToDatabase(id, breakfastTitle, breakfastImg,breakfastRecipe, day, breakfast);
    
  }
  console.log(props.thursday.thursdayBreakfastTitle)
  return (
    <div>
      <h1>Thursday</h1>
      <h2>BreakFast</h2>
      
        <div>
          <MealPlanList        
          
          updateMealPlan={props.updateMealPlan}
         toggleUpdatePlan={ props.toggleUpdateMealPlan}
            id={props.id}
            title={props.thursday.thursdayBreakfastTitle}
            img={props.thursday.thursdayBreakfastImg}
            recipe={props.thursday.thursdayBreakfastRecipe}
            onClick={updateThursdayBreakfast}
          ></MealPlanList>
        </div>

     <div>
      
        <h2>Lunch</h2>
        <MealPlanList                
         updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.thursday.thursdayLunchTitle}
          img={props.thursday.thursdayLunchImg}
          recipe={props.thursday.thursdayLunchRecipe}
          onClick={updateThursdayLunch}
        ></MealPlanList>
      </div>
    <div>
        <h2>Dinner</h2>
        <MealPlanList         
          updateMealPlan={props.updateMealPlan}
          toggleUpdatePlan={ props.toggleUpdateMealPlan}
          id={props.id}
          title={props.thursday.thursdayDinnerTitle}
          img={props.thursday.thursdayDinnerImg}
          recipe={props.thursday.thursdayDinnerRecipe}
          onClick={updateThursdayDinner}
        ></MealPlanList>
      </div>
    </div>
  );
}
