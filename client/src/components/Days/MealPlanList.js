import React, { useContext, useState } from "react";
import MealPlanGetRecipe from "./MealPlanGetRecipe";
import { RecipeListContext } from "../../recipeListContext";
import MealPlanUpdate from "./MealPlanUpdate";
import axios from "axios";
export default function MealPlanList(props) {
  const {API_KEY} = useContext(RecipeListContext)
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({id:"", summary:"", title:""});
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
      console.log(currentRecipes)
      toggler()
  }

function showRecipe(){
axios.get(`https://api.spoonacular.com/recipes/${props.recipe}/summary?apiKey=${API_KEY}`)
.then(res=> setCurrentRecipe(prev=>({...prev, summary:res.data.summary})))
.catch(err=>console.log(err))
console.log(currentRecipe)
showRecipeToggler()
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
      
      
      {!recipeToggle &&<button onClick={showRecipe} >ShowRecipe</button>}
      {recipeToggle &&
      <MealPlanGetRecipe recipeToggle={recipeToggle} showRecipeToggler ={showRecipeToggler} recipeSummary={currentRecipe.summary}/>
      }
    
      </div>
    </div>
    </div>
  );
}
