const express = require('express')
const mealPlanRouter = express.Router()
const MealPlan = require('../models/mealPlan.js')


mealPlanRouter.route('/')
.get((req, res, next)=>{
MealPlan.find((err, allMeals)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.send(allMeals)
})
})
.post((req, res, next)=>{
    const postedMeal = req.body
    const newMeal = new MealPlan(postedMeal)
    newMeal.save((err, addedMealPlan)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        res.send(addedMealPlan)
})
    })

mealPlanRouter.put("/:mealId", (req, res, next)=>{   

    MealPlan.findOneAndUpdate({_id:req.params.mealId}, req.body, {new:true}, (err, updatedInfo)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.send(updatedInfo)
    })

})

mealPlanRouter.delete("/:mealId", (req, res, next)=>{

    MealPlan.findOneAndDelete({_id:req.params.mealId}, (err, deletedMeal)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.send(`The meal with the ID of ${deletedMeal._id} has been deleted`)
    })
})


module.exports = mealPlanRouter