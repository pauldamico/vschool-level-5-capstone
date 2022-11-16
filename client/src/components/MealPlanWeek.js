import React, { useState } from "react";
import MealPlanSunday from "./Days/MealPlanSunday";
import MealPlanMonday from "./Days/MealPlanMonday";
import MealPlanTuesday from "./Days/MealPlanTuesday";
import MealPlanWednesday from "./Days/MealPlanWednesday";
import MealPlanThursday from "./Days/MealPlanThursday";
import MealPlanFriday from "./Days/MealPlanFriday";
import MealPlanSaturday from "./Days/MealPlanSaturday";
import axios from "axios";

export default function MealPlanWeek(props) {
  const [userRecipes, setUserRecipes] = useState([]);
  const [updateMealPlan, setUpdateMealPlan] = useState(false);

  function showUserInfo() {
    props.updateUserInfo();
  }

  const { sundayBreakfast, sundayLunch, sundayDinner, 
    mondayBreakfast, mondayLunch, mondayDinner,
    tuesdayBreakfast, tuesdayLunch, tuesdayDinner,
    wednesdayBreakfast, wednesdayLunch, wednesdayDinner,
    thursdayBreakfast, thursdayLunch, thursdayDinner,
    fridayBreakfast, fridayLunch, fridayDinner,
    saturdayBreakfast, saturdayLunch, saturdayDinner
  } =
    props.currentUserInfo;

  return (
    <div  className="container-fluid" >
      <div className="row">
      <div className="col">
        <MealPlanSunday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          sundayBreakfast={sundayBreakfast}
          sundayLunch={sundayLunch}
          sundayDinner={sundayDinner}
        
        />
      </div>
      <div className="col">
        <MealPlanMonday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          mondayBreakfast={mondayBreakfast}
          mondayLunch={mondayLunch}
          mondayDinner={mondayDinner}
        />
      </div>
      <div className="col">
        <MealPlanTuesday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          tuesdayBreakfast={tuesdayBreakfast}
          tuesdayLunch={tuesdayLunch}
          tuesdayDinner={tuesdayDinner}
        />
      </div>
      <div className="col">
        <MealPlanWednesday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          wednesdayBreakfast={wednesdayBreakfast}
          wednesdayLunch={wednesdayLunch}
          wednesdayDinner={wednesdayDinner}
        />
      </div>
      <div className="col">
        <MealPlanThursday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          thursdayBreakfast={thursdayBreakfast}
          thursdayLunch={thursdayLunch}
          thursdayDinner={thursdayDinner}
        />
      </div>
      <div className="col">
        <MealPlanFriday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          fridayBreakfast={fridayBreakfast}
          fridayLunch={fridayLunch}
          fridayDinner={fridayDinner}
        />
      </div>
      <div className="col">
        <MealPlanSaturday
          updateToDatabase={props.updateToDatabase}
          updateMealPlan={updateMealPlan}
          userRecipes={userRecipes}
          id={props.currentUserInfo.userId}
          saturdayBreakfast={saturdayBreakfast}
          saturdayLunch={saturdayLunch}
          saturdayDinner={saturdayDinner}
        />
      </div>
      </div>
    </div>
  );
}
