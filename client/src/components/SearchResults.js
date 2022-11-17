import { useContext } from "react";
import { RecipeListContext } from "../recipeListContext";
import Recipe from "./Recipe";
import ReactPaginate from "react-paginate"

function SearchResults() {
    const {listData, handlePageClick, pageCount, recipesPerPage} = useContext(RecipeListContext)

    let finalPageCount = Math.ceil(pageCount / recipesPerPage)


    console.log(pageCount)
    console.log(finalPageCount)

    const displayList = listData.map(function(recipe) {
        return (
            <Recipe 
                key={recipe.id}
                recipe={recipe}
            />
        )
    })

    return (
        <div className="container">
            <div className = "row m-2">
                {displayList}
                <div className = "pagination">
                    <ReactPaginate
                        previousLabel = {"Previous"}
                        nextLabel = {"Next"}
                        breakLabel = {"..."}
                        pageCount = {finalPageCount}
                        marginPagesDisplayed = {3}
                        // pageRangeDisplsyed = {3}
                        onPageChange = {handlePageClick}
                        containerClassName = {"pagination justify-content-center"}
                        pageClassName = {"page-item"}
                        pageLinkClassName = {"page-link"}
                        previousClassName = {"page-item"}
                        previousLinkClassName = {"page-link"}
                        nextClassName = {"page-item"}
                        nextLinkClassName = {"page-link"}
                        breakClassName = {"page-item"}
                        breakLinkClassName = {"page-link"}
                        //HIGHLIGHT THE CURRENT PAGE NUMBER
                        activeClassName = {"active"}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchResults