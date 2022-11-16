import React, { useState, useContext, useEffect } from "react";
import MealPlanUser from "./MealPlanUser";
import { RecipeListContext } from "../recipeListContext";
import MealPlanWeek from "./MealPlanWeek";
import axios from "axios";

export default function MealPlan() {
  const { users, savedRecipes } = useContext(RecipeListContext);
  const [showList, setShowList] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({
    sunday: {
      sundayBreakfastTitle: "",
      sundayBreakfastImg: "",
      sundayBreakfastRecipe: "",
      sundayLunchTitle: "",
      sundayLunchImg: "",
      sundayLunchRecipe: "",
      sundayDinnerTitle: "",
      sundayDinnerImg: "",
      sundayDinnerRecipe: "",
    },
    monday: {
      mondayBreakfastTitle: "",
      mondayBreakfastImg: "",
      mondayBreakfastRecipe: "",
      mondayLunchTitle: "",
      mondayLunchImg: "",
      mondayLunchRecipe: "",
      mondayDinnerTitle: "",
      mondayDinnerImg: "",
      mondayDinnerRecipe: "",
    },
    tuesday: {
      tuesdayBreakfastTitle: "",
      tuesdayBreakfastImg: "",
      tuesdayBreakfastRecipe: "",
      tuesdayLunchTitle: "",
      tuesdayLunchImg: "",
      tuesdayLunchRecipe: "",
      tuesdayDinnerTitle: "",
      tuesdayDinnerImg: "",
      tuesdayDinnerRecipe: "",
    },
    wednesday: {
      wednesdayBreakfastTitle: "",
      wednesdayBreakfastImg: "",
      wednesdayBreakfastRecipe: "",
      wednesdayLunchTitle: "",
      wednesdayLunchImg: "",
      wednesdayLunchRecipe: "",
      wednesdayDinnerTitle: "",
      wednesdayDinnerImg: "",
      wednesdayDinnerRecipe: "",
    },
    thursday: {
      thursdayBreakfastTitle: "",
      thursdayBreakfastImg: "",
      thursdayBreakfastRecipe: "",
      thursdayLunchTitle: "",
      thursdayLunchImg: "",
      thursdayLunchRecipe: "",
      thursdayDinnerTitle: "",
      thursdayDinnerImg: "",
      thursdayDinnerRecipe: "",
    },
    friday: {
      fridayBreakfastTitle: "",
      fridayBreakfastImg: "",
      fridayBreakfastRecipe: "",
      fridayLunchTitle: "",
      fridayLunchImg: "",
      fridayLunchRecipe: "",
      fridayDinnerTitle: "",
      fridayDinnerImg: "",
      fridayDinnerRecipe: "",
    },
    saturday: {
      saturdayBreakfastTitle: "",
      saturdayBreakfastImg: "",
      saturdayBreakfastRecipe: "",
      saturdayLunchTitle: "",
      saturdayLunchImg: "",
      saturdayLunchRecipe: "",
      saturdayDinnerTitle: "",
      saturdayDinnerImg: "",
      saturdayDinnerRecipe: "",
    },
  });


  function showUser() {
    setShowList(!showList);
  }

  function updateUserInfo(id, sun, mon, tue, wed, thu, fri, sat) {

    setCurrentUserInfo({
      userId: id,
      sunday: !{ ...sun } ? "" : { ...sun },
      monday: !{ ...mon } ? "" : { ...mon },
      tuesday: !{ ...tue } ? "" : { ...tue },
      wednesday: !{ ...wed } ? "" : { ...wed },
      thursday: !{ ...thu } ? "" : { ...thu },
      friday: !{ ...fri } ? "" : { ...fri },
      saturday: !{ ...sat } ? "" : { ...sat },
    });
 
  }
  //  this updates state with items that are clicked
  const updateToDatabase = (id, title, img, rec, day, type) => {
    
    const typeTitle = day + type + "Title";
    const typeRecipe = day + type + "Recipe";
    const typeImg = day + type + "Img";
  console.log(id, title, img, rec, day, type)
    setCurrentUserInfo((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [typeTitle]: title,
        [typeRecipe]: rec,
        [typeImg]: img,
      },
    }));      
    console.log(currentUserInfo)
    updateDatabase(id);
  
  };
 

  function updateDatabase(id) {
    console.log(currentUserInfo)
    // axios
    //   .put(`/users/${id}`, currentUserInfo)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    //   axios
    //   .put(`/users/${id}`, currentUserInfo)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  }

  //GRABS THE SPECIFIED USER AND UPDATES STATE (updateUserInfo) WITH ITS DATA
  const chooseUser = users.map((user) => (
    <MealPlanUser
      key={user._id}
      updateUserInfo={updateUserInfo}
      user={user}
      showUser={showUser}
      name={user.name}
    />
  ));

  return (
    <div>
      <section onClick={showUser}>Select User</section>

      {showList && <div>{chooseUser}</div>}
      <div>
        <MealPlanWeek          
          updateToDatabase={updateToDatabase}
          currentUserInfo={currentUserInfo}
          updateUserInfo={updateUserInfo}
        />
      </div>
    </div>
  );
}
