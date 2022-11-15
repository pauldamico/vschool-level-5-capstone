import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { RecipeListContext } from "../recipeListContext";
 
function SavedRecipes() {
    const {users, savedRecipesList, setSavedRecipesList} = useContext(RecipeListContext)
    
    const userList = [
        {label: users[0]?.name, value: users[0]?.name, id: users[0]?._id},
        {label: users[1]?.name, value: users[1]?.name, id: users[1]?._id},
        {label: users[2]?.name, value: users[2]?.name, id: users[2]?._id}
    ]
    
    const [user, setUser] = useState(`${users[0].name}`)
    // console.log(user)

    let userId
        if(user === users[0].name) {
            userId = users[0]._id
        } else if(user === users[1].name) {
            userId = users[1]._id
        } else if(user === users[2].name) {
            userId = users[2]._id
        }

    const handleUserChange = (event) => {
        console.log(event.target.value, "value test")
        setUser(event.target.value)
        // getRecipeList(userId)
        
    }

    function getRecipeList(userId) {
        axios.get(`/recipes/${userId}`)
            .then(res => setSavedRecipesList(res.data))
            .catch(err => console.log(err))
    }

    function deleteRecipe(recipeId) {
        axios.delete(`/recipes/${recipeId}`)
            .then(res => {
                setSavedRecipesList(prevRecipeList => prevRecipeList.filter(recipe => recipe._id !== recipeId))
            })
            .catch(err => console.log(err))
    }

    const displayRecipesList = savedRecipesList?.map(function (recipe) {
        return (
            <div key={recipe.recipeId}>
                <p>{recipe.recipeTitle}</p>
                <img src={recipe.recipeImg} alt={recipe.recipeTile} />
                <button onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
            </div>
        )
    })
 
    return (
        <div>
            <select onChange={handleUserChange}>
                <option value={user}> -- Select a user -- </option>
                {userList.map((user) => <option key={user.value} value={user.value}>{user.label}</option>)}
            </select>
            <br />
            <button onClick={() => getRecipeList(userId)}>Get recipes</button>
            <br />
            {displayRecipesList}
        </div>
    )
 
}
 
export default SavedRecipes