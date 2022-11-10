const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  // title: { type: String, required: true },
  // ingredients: { type: String, required: true },
  // imageUrl: { type: String, required: true},
  recipeId: { type: String, required: true }, //id for spoonacular recipe
  recipeImg:{type:String, required:true},
  recipeTitle:{type:String, required:true},
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
