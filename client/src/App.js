import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SearchResults from './components/SearchResults';

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/returned-recipes" element={<SearchResults />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App