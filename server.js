const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(morgan('dev'))
mongoose.connect('mongodb://localhost:27017/mealplandb', console.log("Connected to Database"))


app.get('/', (req, res)=>{    
    res.send("Welcome to the meal plan API ")
})


app.use('/recipes', require('./routes/recipeRouter.js'))
app.use('/mealplans', require('./routes/mealPlanRouter.js'))

app.use((err, req, res, next)=>{
    return res.send({errMsg:err.message})
})
app.listen(9000, console.log("Server is listening on port 9000"))