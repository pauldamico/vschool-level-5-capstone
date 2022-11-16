const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },
 sunday:{
      sundayDinnerTitle: { type: String },
      sundayDinnerImg: { type: String },
      sundayDinnerRecipe: { type: String },
      sundayLunchTitle: { type: String },
      sundayLunchImg: { type: String },
      sundayLunchRecipe: { type: String },
      sundayBreakfastTitle: { type: String },
      sundayBreakfastImg: { type: String },
      sundayBreakfastRecipe: { type: String }},
  monday:{
        mondayDinnerTitle: { type: String },
        mondayDinnerImg: { type: String },
        mondayDinnerRecipe: { type: String },
        mondayLunchTitle: { type: String },
        mondayLunchImg: { type: String },
        mondayLunchRecipe: { type: String },
        mondayBreakfastTitle: { type: String },
        mondayBreakfastImg: { type: String },
        mondayBreakfastRecipe: { type: String }},
tuesday:{
        tuesdayDinnerTitle: { type: String },
        tuesdayDinnerImg: { type: String },
        tuesdayDinnerRecipe: { type: String },
        tuesdayLunchTitle: { type: String },
        tuesdayLunchImg: { type: String },
        tuesdayLunchRecipe: { type: String },
        tuesdayBreakfastTitle: { type: String },
        tuesdayBreakfastImg: { type: String },
        tuesdayBreakfastRecipe: { type: String }},
wednesday:{
        wednesdayDinnerTitle: { type: String },
        wednesdayDinnerImg: { type: String },
        wednesdayDinnerRecipe: { type: String },
        wednesdayLunchTitle: { type: String },
        wednesdayLunchImg: { type: String },
        wednesdayLunchRecipe: { type: String },
        wednesdayBreakfastTitle: { type: String },
        wednesdayBreakfastImg: { type: String },
        wednesdayBreakfastRecipe: { type: String }},
thursday:{
        thursdayDinnerTitle: { type: String },
        thursdayDinnerImg: { type: String },
        thursdayDinnerRecipe: { type: String },
        thursdayLunchTitle: { type: String },
        thursdayLunchImg: { type: String },
        thursdayLunchRecipe: { type: String },
        thursdayBreakfastTitle: { type: String },
        thursdayBreakfastImg: { type: String },
        thursdayBreakfastRecipe: { type: String }},
friday:{
        fridayDinnerTitle: { type: String },
        fridayDinnerImg: { type: String },
        fridayDinnerRecipe: { type: String },
        fridayLunchTitle: { type: String },
        fridayLunchImg: { type: String },
        fridayLunchRecipe: { type: String },
        fridayBreakfastTitle: { type: String },
        fridayBreakfastImg: { type: String },
        fridayBreakfastRecipe: { type: String }},  
saturday:{
        saturdayDinnerTitle: { type: String },
        saturdayDinnerImg: { type: String },
        saturdayDinnerRecipe: { type: String },
        saturdayLunchTitle: { type: String },
        saturdayLunchImg: { type: String },
        saturdayLunchRecipe: { type: String },
        saturdayBreakfastTitle: { type: String },
        saturdayBreakfastImg: { type: String },
        saturdayBreakfastRecipe: { type: String }}       



  
});

userSchema.index({
  name: 1,
}, {
  unique: true,})

module.exports = mongoose.model("User", userSchema);
