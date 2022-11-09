import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const RecipeListContext = React.createContext()

const API_KEY = process.env.REACT_APP_API_KEY


function RecipeListContextProvider(props) {
    const navigate = useNavigate()
    const [listData, setListData] = useState([])
    // console.log(listData)
    const [formData, setFormData] = useState({
        search: "",
        cuisine: "",
        diet: "",
        intolerances: ""
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    // useEffect(() => {
    //     axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&apiKey=${API_KEY}`)
    //         .then(response => setListData(response.data.results))
    //         .catch(error => console.log(error))
    // }, [])

    function getSearchResults() {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${formData.search}&cuisine=${formData.cuisine}&diet=${formData.diet}&intolerances=${formData.intolerances}&apiKey=${API_KEY}`)
            .then(response => setListData(response.data.results))
            .catch(error => console.log(error))
    }

    function handleSubmit(event) {
        event.preventDefault()
        getSearchResults()
        navigate("/returned-recipes")
        // console.log(formData)
        
        // setFormData({
        //     search: "",
        //     cuisine: "",
        //     diet: ""
        // })
        // how to clear out the user-entered info after submit?
    }

    return(
        <RecipeListContext.Provider value={{
            listData,
            formData,
            handleChange,
            handleSubmit
        }}>
            {props.children}
        </RecipeListContext.Provider>
            
    )
}

export { RecipeListContext, RecipeListContextProvider}