import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const RecipeListContext = React.createContext();

const API_KEY = process.env.REACT_APP_API_KEY;

function RecipeListContextProvider(props) {
  const navigate = useNavigate();
  const count = useRef(0);
  const [users, setUsers] = useState([]);
  const [listData, setListData] = useState([]);
  // console.log(listData)
  const [formData, setFormData] = useState({
    search: "",
    cuisine: "",
    diet: "",
    intolerances: "",
  });
  const [oneRecipe, setOneRecipe] = useState({});
  const [savedRecipesList, setSavedRecipesList] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);    // this has all of the recipes for all users.  Use this to filter recipes by userId



  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }




                // This allows the users to be created only on the second render and pulls the user data  
                // Below creates 3 users john, enzo, and sara in your local mongodb to simulate having 3 users already in the database
  useEffect(() => {
    axios.get("/users").then((res) => setUsers((prev) => res.data));
    axios.get("/recipes").then((res) => setSavedRecipes(res.data));
    count.current = count.current + 1;
    console.log(users)
    // if (    
    //   users.find((user) => "john" === user.name) === undefined &&
    //   users.find((user) => "sara" === user.name) === undefined &&     
    //   users.find((user) => "enzo" === user.name) === undefined
    // ) {
    //   axios
    //     .post("/users", {
    //       name: "john",
    //       mealPlan: {
    //         sunday: {
    //           dinnerTitle: " john No Title",
    //           dinnerImg: "john No Image",
    //           dinnerRecipe: "john No Recipe",
    //         },
    //       },
    //     })
    //     .then((res) => setUsers((prev) => [...prev, res.data]));
    //   axios
    //     .post("/users", {
    //       name: "enzo",
    //       mealPlan: {
    //         sunday: {
    //           dinnerTitle: " Enzo No Title",
    //           dinnerImg: "Enzo No Image",
    //           dinnerRecipe: "Enzo No Recipe",
    //         },
    //       },
    //     })
    //     .then((res) => setUsers((prev) => [...prev, res.data]));
    //   axios
    //     .post("/users", {
    //       name: "sara",
    //       mealPlan: {
    //         sunday: {
    //           dinnerTitle: " Sara No Title",
    //           dinnerImg: " Sara No Image",
    //           dinnerRecipe: " Sara No Recipe",
    //         },
    //       },
    //     })
    //     .then((res) => setUsers((prev) => [...prev, res.data]));
    // }

  }, []);
  

  function getSearchResults() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&cuisine=${formData.cuisine}&diet=${formData.diet}&intolerances=${formData.intolerances}&apiKey=${API_KEY}`
      )
      .then((response) => setListData(response.data.results))
      .catch((error) => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSearchResults();
    navigate("/returned-recipes");
  }



  function saveUserRecipe(userId, recId, img, title) {
    const postedRecipe = {
      recipeId: recId,
      recipeImg: img,
      recipeTitle: title,
    };
    axios
      .post(`/recipes/${userId}`, postedRecipe)
      .then((res) => console.log(res.data));
    navigate("/");
  }

  function getRecipeDetails(id) {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`
      )
      .then((response) => setOneRecipe(response.data))
      .catch((error) => console.log(error));
  }


  return (
    <RecipeListContext.Provider
      value={{
        users,
        listData,
        formData,
        handleChange,
        handleSubmit,
        oneRecipe,
        getRecipeDetails,
        saveUserRecipe,
        count,
        savedRecipesList,
        setSavedRecipesList,       
        savedRecipes
      }}
    >
      {props.children}
    </RecipeListContext.Provider>
  );
}

export { RecipeListContext, RecipeListContextProvider };
