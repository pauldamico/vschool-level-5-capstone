import React, {useState, useContext} from "react"
import { RecipeListContext } from "../../recipeListContext"




export default function  MealPlanUpdate (props) {
   

    const [updateUserMeal, setUpdateUserMeal] = useState({title:"", img:"", recipe:""})

    const updateUserMealInfo = () => {
        // setUpdateUserMeal(prev=>({...prev, title:props.recipeTitle, img:props.recipeImg, recipe:props.recipeId}))
      props.sundayOnClick(props.id, props.recipeTitle, props.recipeImg, props.recipeId,)
     console.log(props.id)
    //  console.log(props.dinnerRecipe)
    //  console.log(props.dinnerImg)
   
      
    }

    return(
        <div onClick={updateUserMealInfo}>
       test
            <h1>{props.recipeTitle}</h1>
            <img src={props.recipeImg}/>
            <p>Recipe ID: {props.recipeId}</p>

        </div>
    )

}