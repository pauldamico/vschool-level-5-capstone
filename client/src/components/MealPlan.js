import React, { useState, useContext } from "react";
import MealPlanDay from "./MealPlanDay";
import { RecipeListContext } from "../recipeListContext";
import MealPlanUser from "./MealPlanUser";

export default function MealPlan() {
  const { users } = useContext(RecipeListContext);

  const [showList, setShowList] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({
    sunday: {},
    monday: {},
    tuesday: {},
    wednesday: {},
    thursday: {},
    friday: {},
    saturday: {}
  });

  function showUser() {
    setShowList(!showList);
  }

  function updateDinnerMeal(userMealInfo, id) {
    setCurrentUserInfo((prev) => ({...prev, ...userMealInfo, id }));
 
  }



  const chooseUser = users.map((user) => (
    <MealPlanUser
      updateDinnerMeal={updateDinnerMeal}
      key={user._id}
      {...user}
      showUser={showUser}
      name={user.name}
    />
  ));
  function sundayOnClick (id){
    console.log("sunday", id)
  }
  function mondayOnClick (){
    console.log("monday")
  }
  function tuesdayOnClick (){
    console.log("tuesday")
  }
  function wednesdayOnClick (){
    console.log("wednesday")
  }
  function thursdayOnClick (){
    console.log("thursday")
  }
  function fridayOnClick (){
    console.log("friday")
  }
  function saturdayOnClick (){
    console.log("saturday")
  }
  return (
    <div>
      {!showList && <div onClick={showUser}>Choose a user</div>}
      {showList && (
        <div>
          {chooseUser}
          <section onClick={showUser}>Hide List</section>
        </div>
      )}
      <div className="meal-plan-div">
        <div>
          <h1>Sunday</h1>
          <MealPlanDay
          onClick={sundayOnClick}
            dinnerTitle={currentUserInfo.sunday.dinnerTitle}
            dinnerRecipe={currentUserInfo.sunday.dinnerRecipe}
            dinnerImg={currentUserInfo.sunday.dinnerImg}
            id={currentUserInfo.id}
            updateDinnerMeal={updateDinnerMeal}
          />
         
        </div>
        <div>
          <h1>Monday</h1>
          <MealPlanDay
           onClick={mondayOnClick}
            dinnerTitle={currentUserInfo.monday.dinnerTitle}
            dinnerRecipe={currentUserInfo.monday.dinnerRecipe}
            dinnerImg={currentUserInfo.monday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Tuesday</h1>
          <MealPlanDay
          onClick={tuesdayOnClick}
            dinnerTitle={currentUserInfo.tuesday.dinnerTitle}
            dinnerRecipe={currentUserInfo.tuesday.dinnerRecipe}
            dinnerImg={currentUserInfo.tuesday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Wednesday</h1>
          <MealPlanDay
          onClick={wednesdayOnClick}
            dinnerTitle={currentUserInfo.wednesday.dinnerTitle}
            dinnerRecipe={currentUserInfo.wednesday.dinnerRecipe}
            dinnerImg={currentUserInfo.wednesday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Thursday</h1>
          <MealPlanDay
          onClick={thursdayOnClick}
            dinnerTitle={currentUserInfo.thursday.dinnerTitle}
            dinnerRecipe={currentUserInfo.thursday.dinnerRecipe}
            dinnerImg={currentUserInfo.thursday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Friday</h1>
          <MealPlanDay
          onClick={fridayOnClick}
            dinnerTitle={currentUserInfo.friday.dinnerTitle}
            dinnerRecipe={currentUserInfo.friday.dinnerRecipe}
            dinnerImg={currentUserInfo.friday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Saturday</h1>
          <MealPlanDay
          onClick={saturdayOnClick}
            dinnerTitle={currentUserInfo.saturday.dinnerTitle}
            dinnerRecipe={currentUserInfo.saturday.dinnerRecipe}
            dinnerImg={currentUserInfo.saturday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
      </div>
    </div>
  );
}
