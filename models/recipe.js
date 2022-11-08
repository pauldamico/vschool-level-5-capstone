const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  foodName: { type: String, required: true },
  calories: { type: Number },
  protein: { type: Number },
  carbs: { type: Number },
  fat: { type: Number },
  imageUrl: { type: String }
});

module.exports = mongoose.model("Recipe", recipeSchema);
