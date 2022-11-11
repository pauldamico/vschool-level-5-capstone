const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
  mealPlan: {
    sunday: {
      dinnerTitle: { type: String },
      dinnerImg: { type: String },
      dinnerRecipe: { type: String },
      lunchTitle: { type: String },
      lunchImg: { type: String },
      lunchRecipe: { type: String },
      breakfastTitle: { type: String },
      breakfastImg: { type: String },
      breakfastRecipe: { type: String }
    },
    monday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      },
      tuesday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      },
      wednesday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      },
      thursday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      },
      friday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      },
      saturday: {
        dinnerTitle: { type: String },
        dinnerImg: { type: String },
        dinnerRecipe: { type: String },
        lunchTitle: { type: String },
        lunchImg: { type: String },
        lunchRecipe: { type: String },
        breakfastTitle: { type: String },
        breakfastImg: { type: String },
        breakfastRecipe: { type: String }
      }          
  }
});

module.exports = mongoose.model("User", userSchema);
