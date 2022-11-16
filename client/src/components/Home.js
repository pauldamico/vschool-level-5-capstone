import SearchForm from "./SearchForm"

function Home() {
    return (
        <div className="background-main-image">
            <div className="container">
            <div className="row py-5">
                <div className="col-md-6">
                    <h1>Search for recipes and plan your meals</h1>
                    <p className="lead">Here we should have brief info and description about how the app works.</p>
                    <SearchForm />
                </div>
                <div className="col-md-6 mx-auto d-none d-md-block">
                    <img src="https://source.unsplash.com/2RrBE90w0T8" className="main-img img-responsive" alt="green and purple vegetables"/>
                </div>


            </div>
        </div>
        </div>
        
    )
}

export default Home