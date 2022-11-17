import React, { useContext, useState } from "react";
import MealPlanGetRecipe from "./MealPlanGetRecipe";
import { RecipeListContext } from "../../recipeListContext";
import MealPlanUpdate from "./MealPlanUpdate";
import axios from "axios";
export default function MealPlanList(props) {
  const {API_KEY} = useContext(RecipeListContext)
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState([]);
const [toggle, setToggle] = useState(false)
const [recipeToggle, setRecipeToggle] = useState(false)
function toggler (){
  setToggle(!toggle)
}

function showRecipeToggler (){
setRecipeToggle(!recipeToggle)
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
      toggler()
  }
function showRecipe(){
axios.get(`https://api.spoonacular.com/recipes/${props.recipe}/information?includeNutrition=false&apiKey=${API_KEY}`)
.then(res=> setCurrentRecipe((res.data.analyzedInstructions[0].steps)))
.catch(err=>console.log(err))
showRecipeToggler()

}
  return (
  <div>
      <div >
     
    { toggle &&<div className="mealplan-list-div" onClick={toggler}>    
    <div className="mealplan-list-div-inner">
      <div className="select-meal-grid">  
      {listOfRecipes}
      </div>
      </div>
      </div>}
   
      {props.children}
   
      <div className="indiv-mealplan-box-div" style={{ backgroundImage:`url(${props.img})`,  backgroundSize:"cover"}}>
     <div className="meal-plan-title-div">
      <h3 className="meal-plan-title">{props.title}</h3>
      </div>
      {/* <img style={{width:"21vh"}} src={props.img} /> */}
      {/* <p>{props.recipe}</p> */}
      <div className="meal-plan-button-div">
      <button onClick={getUserRecipes} >Select Meal</button>
      {!recipeToggle &&<button onClick={showRecipe} >ShowRecipe</button>}</div>
      {recipeToggle &&
      <MealPlanGetRecipe recipeToggle={recipeToggle} title={props.title} showRecipeToggler ={showRecipeToggler} currentRecipe ={currentRecipe} />
      }
    
      </div>
    </div>
    </div>
  );
}
