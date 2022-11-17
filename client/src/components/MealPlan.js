import React, { useState, useContext, useEffect } from "react";
import MealPlanUser from "./MealPlanUser";
import { RecipeListContext } from "../recipeListContext";
import MealPlanWeek from "./MealPlanWeek";
import axios from "axios";

export default function MealPlan() {
  const { users, savedRecipes } = useContext(RecipeListContext);
  const [showList, setShowList] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({
    sundayBreakfast: {title: "",img: "",recipe: ""},
    sundayLunch: {title: "",img: "",recipe: ""},
    sundayDinner: {title: "",img: "",recipe: ""},
    mondayBreakfast: {title: "",img: "",recipe: ""},
    mondayLunch: {title: "",img: "",recipe: ""},
    mondayDinner: {title: "",img: "",recipe: ""},
    tuesdayBreakfast: {title: "",img: "",recipe: ""},
    tuesdayLunch: {title: "",img: "",recipe: ""},
    tuesdayDinner: {title: "",img: "",recipe: ""},
    wednesdayBreakfast: {title: "",img: "",recipe: ""},
    wednesdayLunch: {title: "",img: "",recipe: ""},
    wednesdayDinner: {title: "",img: "",recipe: ""},
    thursdayBreakfast: {title: "",img: "",recipe: ""},
    thursdayLunch: {title: "",img: "",recipe: ""},
    thursdayDinner: {title: "",img: "",recipe: ""},
    fridayBreakfast: {title: "",img: "",recipe: ""},
    fridayLunch: {title: "",img: "",recipe: ""},
    fridayDinner: {title: "",img: "",recipe: ""},
    saturdayBreakfast: {title: "",img: "",recipe: ""},
    saturdayLunch: {title: "",img: "",recipe: ""},
    saturdayDinner: {title: "",img: "",recipe: ""},
  });

  function showUser() {
    setShowList(!showList);
  }

  function updateUserInfo(id, sunB, sunL, sunD, monB, monL, monD,tueB, tueL, tueD,wedB, wedL, wedD,thuB, thuL, thuD,friB, friL, friD,satB, satL, satD,) {
    setCurrentUserInfo({
      userId: id,
      sundayBreakfast: !{ ...sunB } ? "" : { ...sunB },
      sundayLunch: !{ ...sunL } ? "" : { ...sunL },
      sundayDinner: !{ ...sunD } ? "" : { ...sunD },
      mondayBreakfast: !{ ...monB } ? "" : { ...monB },
      mondayLunch: !{ ...monL } ? "" : { ...monL },
      mondayDinner: !{ ...monD } ? "" : { ...monD },
      tuesdayBreakfast: !{ ...tueB } ? "" : { ...tueB },
      tuesdayLunch: !{ ...tueL } ? "" : { ...tueL },
      tuesdayDinner: !{ ...tueD } ? "" : { ...tueD },
      wednesdayBreakfast: !{ ...wedB } ? "" : { ...wedB },
      wednesdayLunch: !{ ...wedL } ? "" : { ...wedL },
      wednesdayDinner: !{ ...wedD } ? "" : { ...wedD },
      thursdayBreakfast: !{ ...thuB } ? "" : { ...thuB },
      thursdayLunch: !{ ...thuL } ? "" : { ...thuL },
      thursdayDinner: !{ ...thuD } ? "" : { ...thuD },
     fridayBreakfast: !{ ...friB } ? "" : { ...friB },
     fridayLunch: !{ ...friL } ? "" : { ...friL },
     fridayDinner: !{ ...friD } ? "" : { ...friD },
      saturdayBreakfast: !{ ...satB } ? "" : { ...satB },
      saturdayLunch: !{ ...satL } ? "" : { ...satL },
      saturdayDinner: !{ ...satD } ? "" : { ...satD }
    });
  }
  //  this updates state with items that are clicked  (day is the current day passed as a string and type is either breakfast lunch or dinner)
  const updateToDatabase = (id, mealTitle, image, rec, day, type) => {   
    const dayType = day + type   
    const updatedDBInfo = {[dayType]:{title:mealTitle, recipe:rec, img:image}}

    axios
    .put(`/users/${id}`, updatedDBInfo)
    .then((res) => setCurrentUserInfo(prev=>({...prev, ...res.data})))
    .catch((err) => console.log(err));
  };


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
      <div className="container p-4 my-4 bg-white rounded-3">
      <div className="row d-flex justify-content-center">
      <div className="col-auto">
        <div>
      <div className= "meal-plan-select-user-div" onClick={showUser}>-- Select a User --
      
      {showList && <div >     
        {chooseUser}</div>}
        </div>
        </div>
      </div>
      </div>
      </div>
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
