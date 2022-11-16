import React, {useState} from "react";
import MealPlanSunday from "./Days/MealPlanSunday";
import MealPlanMonday from "./Days/MealPlanMonday";
import MealPlanTuesday from "./Days/MealPlanTuesday";
import MealPlanWednesday from "./Days/MealPlanWednesday";
import MealPlanThursday from "./Days/MealPlanThursday";
import MealPlanFriday from "./Days/MealPlanFriday";
import MealPlanSaturday from "./Days/MealPlanSaturday";
import axios from "axios";

export default function MealPlanWeek(props) {
const [userRecipes, setUserRecipes] = useState([])
const [updateMealPlan, setUpdateMealPlan] = useState(false)

  function showUserInfo() {
    props.updateUserInfo();
  }






  const {sunday, monday, tuesday, wednesday, thursday, friday, saturday} = props.currentUserInfo

  return (
    <div className="main-mealplan-div">
      <div>
      <MealPlanSunday updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} sunday={sunday}/>
      </div><div>
      <MealPlanMonday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} monday={monday}/>
      </div><div>
      <MealPlanTuesday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} tuesday={tuesday}/>
      </div><div>
      <MealPlanWednesday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} wednesday={wednesday}/>
      </div><div>
      <MealPlanThursday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} thursday={thursday}/>
      </div><div>
      <MealPlanFriday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} friday={friday}/>
      </div><div>
      <MealPlanSaturday  updateToDatabase={props.updateToDatabase} updateMealPlan={updateMealPlan}  userRecipes={userRecipes}  id={props.currentUserInfo.userId} saturday={saturday}/>
    </div>
    </div>
  );
}
