import { useContext, useState } from "react";
import SaveToList from "./SaveToList";
import { RecipeListContext} from "../recipeListContext";

function RecipeDetails() {
  const { oneRecipe, users, saveUserRecipe, count} = useContext(RecipeListContext);
  const [selectedUser, setSelectedUser] = useState(count.current >= 1 && users[0].name)
  const ingredients = oneRecipe?.extendedIngredients;
  console.log(oneRecipe.sourceUrl);
console.log(users)
  const ingredientList = ingredients?.map(function (item) {
    return <p key={item.id}>{item.original}</p>;
  });
console.log(ingredientList)

  const selectChangeHandler = (event) => {   
    setSelectedUser(event.target.value);
  };

  const saveToRecipeList = () =>{
    const userId = !users.find(user=>selectedUser === user.name) ? userId = users[0]._id : users.find(user=>selectedUser === user.name)
  console.log(oneRecipe.extendedIngredients, "test list");
    
    saveUserRecipe(userId._id, oneRecipe.id, oneRecipe.image, oneRecipe.title)
  }
console.log(oneRecipe)

  const selectUser = users.map((user) => (
    <SaveToList key={user._id} {...user} name={user.name}></SaveToList>
  ));

  return (
    <div>
      <h4>{oneRecipe.title}</h4>
      <p>Servings: {oneRecipe.servings}</p>
      <img src={oneRecipe.image} alt={oneRecipe.tile} />
      {ingredientList}
      <p>
        Find instructions on{" "}
        <a href={oneRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          {oneRecipe.sourceName}
        </a>
      </p>
      <p>Select a user and save to list</p>
      {/* <input /> */}
      <select
      
        value={selectedUser}
        name={selectedUser}
        onChange={selectChangeHandler}
      >
        {selectUser}
      </select>

   
      <button onClick ={saveToRecipeList}>Save to a list</button>
    </div>
  );
}

export default RecipeDetails;
