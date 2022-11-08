const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  title: { type: String, required: true },
  ingredients: { type: String, required: true },  
  imageUrl: { type: String, required: true},
  userId:{type:Schema.Types.ObjectId,  ref:"User",  required:true}
});

module.exports = mongoose.model("Recipe", recipeSchema);
