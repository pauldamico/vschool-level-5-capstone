import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/returned-books">Search Results</Link>
        </nav>
    )
}

export default Navbar