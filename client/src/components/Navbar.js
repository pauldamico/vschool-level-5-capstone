import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/returned-recipes">Search Results</Link>
            <Link to="/saved-recipes">Saved Recipes</Link>
            <Link to="/meal-plans">Meal Plans</Link>
        </nav>
    )
}

export default Navbar