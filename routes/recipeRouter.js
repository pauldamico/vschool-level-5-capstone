const express = require('express')
const recipeRouter = express.Router()
const Recipe = require('../models/recipe.js')


recipeRouter.get('/', (req, res, next)=>{
Recipe.find((err, allMeals)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.send(allMeals)
})
})
recipeRouter.post('/:userId', (req, res, next)=>{
    const postedRecipe = req.body
    req.body.userId = req.params.userId
    const newRecipe = new Recipe(postedRecipe)
    newRecipe.save((err, addedRecipe)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.send(addedRecipe)
})
    })

recipeRouter.put("/:recipeId", (req, res, next)=>{   

    Recipe.findOneAndUpdate({_id:req.params.recipeId}, req.body, {new:true}, (err, updatedInfo)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.send(updatedInfo)
    })

})

recipeRouter.delete("/:recipeId", (req, res, next)=>{

    Recipe.findOneAndDelete({_id:req.params.recipeId}, (err, deletedRecipe)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(`The recipe with the ID of ${deletedRecipe._id} has been deleted`)
    })
})


module.exports = recipeRouter