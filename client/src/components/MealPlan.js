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

  function updateDinnerMeal(userMealInfo) {
    setCurrentUserInfo((prev) => ({...prev, ...userMealInfo }));
    console.log(currentUserInfo);
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
            dinnerTitle={currentUserInfo.sunday.dinnerTitle}
            dinnerRecipe={currentUserInfo.sunday.dinnerRecipe}
            dinnerImg={currentUserInfo.sunday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Monday</h1>
          <MealPlanDay
            dinnerTitle={currentUserInfo.monday.dinnerTitle}
            dinnerRecipe={currentUserInfo.monday.dinnerRecipe}
            dinnerImg={currentUserInfo.monday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Tuesday</h1>
          <MealPlanDay
            dinnerTitle={currentUserInfo.tuesday.dinnerTitle}
            dinnerRecipe={currentUserInfo.tuesday.dinnerRecipe}
            dinnerImg={currentUserInfo.tuesday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Wednesday</h1>
          <MealPlanDay
            dinnerTitle={currentUserInfo.wednesday.dinnerTitle}
            dinnerRecipe={currentUserInfo.wednesday.dinnerRecipe}
            dinnerImg={currentUserInfo.wednesday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Thursday</h1>
          <MealPlanDay
            dinnerTitle={currentUserInfo.thursday.dinnerTitle}
            dinnerRecipe={currentUserInfo.thursday.dinnerRecipe}
            dinnerImg={currentUserInfo.thursday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Friday</h1>
          <MealPlanDay
            dinnerTitle={currentUserInfo.friday.dinnerTitle}
            dinnerRecipe={currentUserInfo.friday.dinnerRecipe}
            dinnerImg={currentUserInfo.friday.dinnerImg}
            updateDinnerMeal={updateDinnerMeal}
          />
        </div>
        <div>
          <h1>Saturday</h1>
          <MealPlanDay
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
