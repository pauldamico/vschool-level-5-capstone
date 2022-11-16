import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import MealPlan from './components/MealPlan';
import SearchResults from './components/SearchResults';
import RecipeDetails from './components/RecipeDetails';
import SavedRecipes from './components/SavedRecipes'


function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/returned-recipes" element={<SearchResults />} />
                <Route path="/returned-recipes/:recipeId" element={<RecipeDetails />} />
                <Route path="/saved-recipes" element={<SavedRecipes />} />
                <Route path="/meal-plans" element={<MealPlan />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App