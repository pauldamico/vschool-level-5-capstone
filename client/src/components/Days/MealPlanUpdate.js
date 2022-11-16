import React, {useState} from "react";
export default function MealPlanUpdate(props) {



function updateDay (){
console.log( props.recipeTitle,props.recipeImg, props.recipeId)
    props.onClick(props.id, props.recipeTitle,props.recipeImg, props.recipeId)
}
  return (
  
    <div onClick={updateDay}>
      <h3>{props.recipeTitle}</h3>      
      <img src={props.recipeImg} />
      <section>Recipe Id: {props.recipeId}</section>
    
    </div>
  );
}
