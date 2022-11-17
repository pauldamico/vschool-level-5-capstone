const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: { type: String, required: true },

  sundayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  sundayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  sundayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  mondayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  mondayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  mondayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  tuesdayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  tuesdayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  tuesdayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  wednesdayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  wednesdayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  wednesdayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  thursdayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  thursdayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  thursdayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  fridayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  fridayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  fridayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  saturdayBreakfast: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  saturdayLunch: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  },
  saturdayDinner: {
    title: { type: String },
    img: { type: String },
    recipe: { type: String },
  }  
});


userSchema.index({
  name: 1,
}, {
  unique: true,})

module.exports = mongoose.model("User", userSchema);


