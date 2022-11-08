const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mealPlanSchema = new Schema({
  dailyPlan: [{
    breakfast:[
      {
        foodName: { type: String, required: true },
        foodType: { type: String },
        sideItem: { type: Boolean },
        calories: { type: Number },
        imageUrl: { type: String },
      }
    ]},{
    lunch:[
      {
        foodName: { type: String, required: true },
        foodType: { type: String },
        sideItem: { type: Boolean },
        calories: { type: Number },
        imageUrl: { type: String },
      }
    ]},{
    dinner:[
      {
        foodName: { type: String, required: true },
        foodType: { type: String },
        sideItem: { type: Boolean },
        calories: { type: Number },
        imageUrl: { type: String },
      }
    ]},
  ],
 
 
});

module.exports = mongoose.model("mealplan", mealPlanSchema);
