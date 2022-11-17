import { useContext, useState } from "react";
import SaveToList from "./SaveToList";
import { RecipeListContext} from "../recipeListContext";

function RecipeDetails() {
  const { oneRecipe, users, saveUserRecipe, count} = useContext(RecipeListContext);
  const [selectedUser, setSelectedUser] = useState(count.current >= 1 && users[0].name)
  const ingredients = oneRecipe?.extendedIngredients;
  
  const ingredientList = ingredients?.map(function (item) {
    return <p key={item.id}>{item.original}</p>;
  });

  const selectChangeHandler = (event) => {   
    setSelectedUser(event.target.value);
  };

  const saveToRecipeList = () =>{
    const userId = !users.find(user=>selectedUser === user.name) ? userId = users[0]._id : users.find(user=>selectedUser === user.name)
    
    saveUserRecipe(userId._id, oneRecipe.id, oneRecipe.image, oneRecipe.title)
  }

  const selectUser = users.map((user) => (
    <SaveToList key={user._id} {...user} name={user.name}></SaveToList>
  ));

  return (
    <div className = "individual-recipe-div">
      <div className = "individual-recipe-div2">
        <h4 className = "individual-recipe-title">{oneRecipe.title}</h4>
        <p>Servings: {oneRecipe.servings}</p>
        <img className = "individual-recipe-img" src={oneRecipe.image} alt={oneRecipe.tile} />
        {ingredientList}
        <p>
          Find instructions on{" "}
          <a href={oneRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">
            {oneRecipe.sourceName}
          </a>
        </p>
        <p className = "individual-recipe-save">Select a user and save to list</p>
        
        <div className = "individual-recipe-userDiv">
          <select
            className = "individual-recipe-nameSelect"
            value={selectedUser}
            name={selectedUser}
            onChange={selectChangeHandler}
          > 
            {selectUser}
          </select>
          <br />
          <button className = "individual-recipe-button" onClick ={saveToRecipeList}>Save to a list</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
