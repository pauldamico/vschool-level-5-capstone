import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SearchResults from './components/SearchResults';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/returned-recipes" element={<SearchResults />} />
                <Route path="/returned-recipes/:recipeId" element={<RecipeDetails />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App