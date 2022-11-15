import {useContext} from 'react'
import {RecipeListContext} from '../recipeListContext'

function SearchForm() {
    const {handleChange, formData, handleSubmit} = useContext(RecipeListContext)

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="key word"
                onChange={handleChange}
                name="search"
            />
            <br />
            <label htmlFor="cuisine">Cuisine</label>
            <select
                id="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                name="cuisine"
            >
                <option value=""> - </option>
                <option value="american">American</option>
                <option value="cajun">Cajun</option>
                <option value="french">French</option>
                <option value="indian">Indian</option>
                <option value="mediterranean">Mediterranean</option>
                <option value="mexican">Mexican</option>
            </select>
            <br />
            <label htmlFor="diet">Diet</label>
            <select
                id="diet"
                value={formData.diet}
                onChange={handleChange}
                name="diet"
            >
                <option value=""> - </option>
                <option value="gluten-free">Gluten Free</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </select>
            <br />
            <label htmlFor="intolerances">Intolerances</label>
            <select
                id="intolerances"
                value={formData.intolerances}
                onChange={handleChange}
                name="intolerances"
            >
                <option value=""> - </option>
                <option value="dairy">Dairy</option>
                <option value="egg">Egg</option>
                <option value="peanut">Peanut</option>
                <option value="shellfish">Shellfish</option>
                <option value="soy">Soy</option>
                <option value="tree-nut">Tree Nut</option>
            </select>
            <br />
            <br />
            <button>Search recipes</button>
        </form>
    )
}

export default SearchForm