import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { RecipeListContext } from "../recipeListContext";

function SavedRecipes() {
    const { users, savedRecipesList, setSavedRecipesList, getRecipeDetails } = useContext(RecipeListContext)

    const userList = [
        { label: users[0]?.name, value: users[0]?.name, id: users[0]?._id },
        { label: users[1]?.name, value: users[1]?.name, id: users[1]?._id },
        { label: users[2]?.name, value: users[2]?.name, id: users[2]?._id }
    ]

    const [user, setUser] = useState(`${users[0].name}`)
    // console.log(user)

    let userId
    if (user === users[0].name) {
        userId = users[0]._id
    } else if (user === users[1].name) {
        userId = users[1]._id
    } else if (user === users[2].name) {
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
            <div key={recipe.recipeId} className="col my-4">
                <div className="card saved-recipe shadow-sm mx-auto">
                    <img src={recipe.recipeImg} className="card-img-top card-image" alt={recipe.recipeTile} />
                    <div className="card-body text-center">
                        {/* <h5 className="card-title">{recipe.recipeTitle}</h5> */}
                        <Link to={`/returned-recipes/${recipe.recipeId}`} className="card-title" onClick={() => getRecipeDetails(recipe.recipeId)}>{recipe.recipeTitle}</Link>
                        <br />
                        <button className="btn btn-light" onClick={() => deleteRecipe(recipe._id)}>Delete Recipe</button>
                    </div>
                </div>
            </div>
        )
    })

    // 

    return (
        <div>
            <h4 className="display-6 text-center">See a list of saved recipes for each user</h4>
            <div className="container p-4 my-4 bg-light rounded-3">
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <select onChange={handleUserChange} className="form-select">
                            <option value={user}> -- Select a user -- </option>
                            {userList.map((user) => <option key={user.value} value={user.value}>{user.label}</option>)}
                        </select>
                    </div>
                    <div className="col-auto">
                        <button onClick={() => getRecipeList(userId)} className="btn btn-secondary">Get recipes</button>
                    </div>
                </div>
            </div>

            <br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {displayRecipesList}
                </div>
            </div>
        </div>
    )

}

export default SavedRecipes