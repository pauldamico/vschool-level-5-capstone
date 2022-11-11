import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RecipeListContext } from "../recipeListContext";
 
function SavedRecipes() {
    const {users, savedRecipesList, setSavedRecipesList} = useContext(RecipeListContext)
    
    // const [user, setUser] = useState("")
    const [user, setUser] = useState(`${users[0].name}`)

    const handleUserChange = (event) => {
        setUser(event.target.value)
        getRecipeList(user._id)
    }
    console.log(user._id)
    const userId = user._id
    // console.log(userId)

    function getRecipeList(userId) {
        axios.get(`/recipes/${userId}`)
            .then(res => setSavedRecipesList(res.data))
            .catch(err => console.log(err))
    }

    const displayRecipesList = savedRecipesList?.map(function (recipe) {
        return (
            <div key={recipe.recipeId}>
                <p>{recipe.recipeTitle}</p>
                <img src={recipe.recipeImg} alt={recipe.recipeTile} />
            </div>
        )
    })
 
    return (
        <div>
            {user}
            <select onChange={handleUserChange}>
                <option value={user}> -- Select a user -- </option>
                {users.map((user) => <option value={user.value}>{user.name}</option>)}
            </select>
            {displayRecipesList}
        </div>
    )
 
}
 
export default SavedRecipes