import React, {useState} from "react";
export default function MealPlanUpdate(props) {



function updateDay (){
console.log( props.recipeTitle,props.recipeImg, props.recipeId)
    props.onClick(props.id, props.recipeTitle,props.recipeImg, props.recipeId)
}
  return (
  
    <div style={{backgroundImage:`url(${props.recipeImg})`, backgroundSize:"cover"}} className="meal-plan-list-meals" onClick={updateDay}>
      <h3 className="select-meal-title">{props.recipeTitle}</h3>      
      
      <section className="select-meal-recipe">Recipe Id: {props.recipeId}</section>
    
    </div>
  );
}
