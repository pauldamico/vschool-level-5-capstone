import { useContext } from 'react'
import { RecipeListContext } from '../recipeListContext'

function SearchForm() {
    const { handleChange, formData, handleSubmit } = useContext(RecipeListContext)

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="search" className="form-label">Search</label>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="key word"
                        onChange={handleChange}
                        name="search"
                    />
                </div>
                {/* <br /> */}
                <div className="mt-3">
                    <label htmlFor="cuisine" className="form-label">Cuisine</label>
                    <select
                        className="form-select"
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
                </div>
                {/* <br /> */}
                <div className="mt-3">
                    <label htmlFor="diet" className="form-label">Diet</label>
                    <select
                        className="form-select"
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
                </div>
                {/* <br /> */}
                <div className="mt-3">
                    <label htmlFor="intolerances" className="form-label">Intolerances</label>
                    <select
                        className="form-select"
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
                </div>
                <br />
                <br />
                <button className="btn btn-light">Search recipes</button>
            </form>
        </div>

    )
}

export default SearchForm