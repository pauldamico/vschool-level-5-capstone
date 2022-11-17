import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg background-main">
            <div className="conatiner-fluid">
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link text-white">Home</Link>
                        <Link to="/returned-recipes" className="nav-item nav-link text-white">Search Results</Link>
                        <Link to="/saved-recipes" className="nav-item nav-link text-white">Saved Recipes</Link>
                        <Link to="/meal-plans" className="nav-item nav-link text-white">Meal Plans</Link>
                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar