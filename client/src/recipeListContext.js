import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const RecipeListContext = React.createContext();

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = "456cb6faf86e4b7ba8fb1bb06d8e3ca4"


function RecipeListContextProvider(props) {
  const navigate = useNavigate();
  const count = useRef(0);
  const [users, setUsers] = useState([]);
  const [listData, setListData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  
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

  function handlePageClick(data) {
    setOffset(data.selected * recipesPerPage)
  }

  //THIS GETS THE USER/RECIPEINFO WHEN STARTING
  useEffect(() => {                                                          
    axios.get("/users").then((res) => setUsers((prev) => res.data));
    axios.get("/recipes").then((res) => setSavedRecipes(res.data));
    count.current = count.current + 1;
 
    }, [])



  //NUMBER OF RESULTS WANTED PER PAGE
  const recipesPerPage = 9;

  //MAKES PAGE NUMBER NOT BECOME THE ORIGINAL STATE OF 0 WHEN A USER LOADS OR REFRESHES THE PAGE
  useEffect(() => {
    getNumberOfPages()
  }, [offset])

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&cuisine=${formData.cuisine}&diet=${formData.diet}&intolerances=${formData.intolerances}&number=${recipesPerPage}&offset=${offset}&apiKey=${API_KEY}`
      )
      .then((response) => setListData(response.data.results))
      .catch((error) => console.log(error));
  }, [offset]);

  // FOR SETTING THE CORRECT AMOUNT OF PAGES DISPLAYED FOR THE USER
  function getNumberOfPages () {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&cuisine=${formData.cuisine}&diet=${formData.diet}&intolerances=${formData.intolerances}&apiKey=${API_KEY}`
      )
      .then((response) => setPageCount(response.data.totalResults))
      .catch((error) => console.log(error));
  };

  


  function getSearchResults() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&cuisine=${formData.cuisine}&diet=${formData.diet}&intolerances=${formData.intolerances}&number=${recipesPerPage}&apiKey=${API_KEY}`
      )
      .then((response) => setListData(response.data.results))
      .catch((error) => console.log(error));
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSearchResults();
    getNumberOfPages();
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
        handlePageClick,
        pageCount,
        recipesPerPage,
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
