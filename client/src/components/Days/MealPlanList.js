import React, { useState } from "react";
import MealPlanUpdate from "./MealPlanUpdate";
import axios from "axios";
export default function MealPlanList(props) {
  const [currentRecipes, setCurrentRecipes] = useState([]);
const [toggle, setToggle] = useState(false)
function toggler (){
  setToggle(!toggle)
}

  const listOfRecipes = currentRecipes.map((recipe) => (
    <MealPlanUpdate
  
    id={props.id}
      recipeImg={recipe.recipeImg}
      recipeId={recipe.recipeId}
      recipeTitle={recipe.recipeTitle}
      onClick={props.onClick}
      key={recipe.recipeId}
    ></MealPlanUpdate>
  ));

  function getUserRecipes() {
    
    axios
      .get(`/recipes/${props.id}`)
      .then((res) => setCurrentRecipes(res.data));
      console.log(currentRecipes)
      toggler()
  }

  return (
  <div>
      <div >
     
    { toggle &&<div className="mealplan-list-div" onClick={toggler}>       
      {listOfRecipes}
      </div>}
      {props.children}
      <div style={{height:"15vh", backgroundImage:`url(${props.img})`, borderRadius:"10px"}}>
      <button onClick={getUserRecipes} >Select Meal</button>
      <h3 style={{fontSize:"15px"}}>{props.title}</h3>

      {/* <img style={{width:"21vh"}} src={props.img} /> */}
      <p>{props.recipe}</p>
      </div>
    </div>
    </div>
  );
}
