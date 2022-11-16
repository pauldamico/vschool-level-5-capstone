import React, { useState, useContext, useEffect } from "react";
import MealPlanUser from "./MealPlanUser";

import { RecipeListContext } from "../recipeListContext";
import MealPlanWeek from "./MealPlanWeek";

import axios from "axios";

export default function MealPlan() {
  const { users, savedRecipes } = useContext(RecipeListContext);

  const [showList, setShowList] = useState(false);
  const [currentUserRecipes, setCurrentUserRecipes] = useState([]);
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
  const [updatedUsers, setUpdatedusers] = useState({
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
    console.log(type + "Title");
    const typeTitle = day + type + "Title";
    const typeRecipe = day + type + "Recipe";
    const typeImg = day + type + "Img";

    setCurrentUserInfo((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [typeTitle]: title,
        [typeRecipe]: rec,
        [typeImg]: img,
      },
    }));

   

    updateDatabase(id);
  };

  function updateDatabase(id) {
    axios
      .put(`/users/${id}`, currentUserInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  const chooseUser = users.map((user) => (
    <MealPlanUser
      key={user._id}
      updateUserInfo={updateUserInfo}
      user={user}
      showUser={showUser}
      name={user.name}
    />
  ));
  console.log(currentUserInfo)
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
//   <div>
//     {!showList && <div onClick={showUser}>Choose a user</div>}
//     {showList && (
//       <div>
//         {chooseUser}
//         <section onClick={showUser}>Hide List</section>
//       </div>
//     )}
//     <div className="meal-plan-div">
//       <div>
//         <h1>Sunday</h1>
//         <MealPlanDay
//           sundayOnClick={sundayOnClick}
//           dinnerTitle={currentUserInfo.sunday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.sunday.dinnerRecipe}
//           dinnerImg={currentUserInfo.sunday.dinnerImg}
//           lunchTitle={currentUserInfo.sunday.lunchTitle}
//           lunchRecipe={currentUserInfo.sunday.lunchRecipe}
//           lunchImg={currentUserInfo.sunday.lunchImg}
//           breakfastTitle={currentUserInfo.sunday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.sunday.breakfastRecipe}
//           breakfastImg={currentUserInfo.sunday.breakfastImg}
//           id={currentUserInfo.id}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Monday</h1>
//         <MealPlanDay
//         mondayOnClick={mondayOnClick}
//           dinnerTitle={currentUserInfo.monday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.monday.dinnerRecipe}
//           dinnerImg={currentUserInfo.monday.dinnerImg}
//           lunchTitle={currentUserInfo.monday.lunchTitle}
//           lunchRecipe={currentUserInfo.monday.lunchRecipe}
//           lunchImg={currentUserInfo.monday.lunchImg}
//           breakfastTitle={currentUserInfo.monday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.monday.breakfastRecipe}
//           breakfastImg={currentUserInfo.monday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Tuesday</h1>
//         <MealPlanDay
//           dinnerTitle={currentUserInfo.tuesday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.tuesday.dinnerRecipe}
//           dinnerImg={currentUserInfo.tuesday.dinnerImg}
//           lunchTitle={currentUserInfo.tuesday.lunchTitle}
//           lunchRecipe={currentUserInfo.tuesday.lunchRecipe}
//           lunchImg={currentUserInfo.tuesday.lunchImg}
//           breakfastTitle={currentUserInfo.tuesday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.tuesday.breakfastRecipe}
//           breakfastImg={currentUserInfo.tuesday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Wednesday</h1>
//         <MealPlanDay
//           dinnerTitle={currentUserInfo.wednesday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.wednesday.dinnerRecipe}
//           dinnerImg={currentUserInfo.wednesday.dinnerImg}
//           lunchTitle={currentUserInfo.wednesday.lunchTitle}
//           lunchRecipe={currentUserInfo.wednesday.lunchRecipe}
//           lunchImg={currentUserInfo.wednesday.lunchImg}
//           breakfastTitle={currentUserInfo.wednesday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.wednesday.breakfastRecipe}
//           breakfastImg={currentUserInfo.wednesday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Thursday</h1>
//         <MealPlanDay
//           dinnerTitle={currentUserInfo.thursday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.thursday.dinnerRecipe}
//           dinnerImg={currentUserInfo.thursday.dinnerImg}
//           lunchTitle={currentUserInfo.thursday.lunchTitle}
//           lunchRecipe={currentUserInfo.thursday.lunchRecipe}
//           lunchImg={currentUserInfo.thursday.lunchImg}
//           breakfastTitle={currentUserInfo.thursday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.thursday.breakfastRecipe}
//           breakfastImg={currentUserInfo.thursday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Friday</h1>
//         <MealPlanDay
//           dinnerTitle={currentUserInfo.friday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.friday.dinnerRecipe}
//           dinnerImg={currentUserInfo.friday.dinnerImg}
//           lunchTitle={currentUserInfo.friday.lunchTitle}
//           lunchRecipe={currentUserInfo.friday.lunchRecipe}
//           lunchImg={currentUserInfo.friday.lunchImg}
//           breakfastTitle={currentUserInfo.friday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.friday.breakfastRecipe}
//           breakfastImg={currentUserInfo.friday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//       <div>
//         <h1>Saturday</h1>
//         <MealPlanDay
//           dinnerTitle={currentUserInfo.saturday.dinnerTitle}
//           dinnerRecipe={currentUserInfo.saturday.dinnerRecipe}
//           dinnerImg={currentUserInfo.saturday.dinnerImg}
//           lunchTitle={currentUserInfo.saturday.lunchTitle}
//           lunchRecipe={currentUserInfo.saturday.lunchRecipe}
//           lunchImg={currentUserInfo.saturday.lunchImg}
//           breakfastTitle={currentUserInfo.saturday.breakfastTitle}
//           breakfastRecipe={currentUserInfo.saturday.breakfastRecipe}
//           breakfastImg={currentUserInfo.saturday.breakfastImg}
//           updateDinnerMeal={updateDinnerMeal}
//           currentUserRecipes={currentUserRecipes}
//         />
//       </div>
//     </div>
//   </div>
// );

// // const [updatedCurrentUserInfo, setUpdatedCurrentUserInfo] = useState({
// //   sunday: {},
// //   monday: {},
// //   tuesday: {},
// //   wednesday: {},
// //   thursday: {},
// //   friday: {},
// //   saturday: {}
// // });

// console.log(currentUserInfo);
// function updateDinnerMeal(userMealInfo, id, currentUserRecipe) {
//   setCurrentUserInfo((prev) => ({ ...prev, ...userMealInfo, id }));
//   axios
//     .get(`/recipes/${id}`)
//     .then((res) => setCurrentUserRecipes((prev) => res.data))
//     .catch((err) => console.log(err));
// }
// console.log(currentUserRecipes);

// function sundayOnClick(
//   id,
//   dintitle,
//   dinImg,
//   dinRecipeId,
//   luntitle,
//   lunImg,
//   lunRecipeId,
//   bFTitle,
//   bFImg,
//   bFRecipeId
// ) {
//   // console.log(title, img , recipeId, id)
//   const updatedUserInfo = {
//     mealPlan: {
//       sunday: {
//         dinnerTitle: dintitle,
//         dinnerImg: dinImg,
//         dinnerRecipe: dinRecipeId,
//         lunchTitle: luntitle,
//         lunchImg: lunImg,
//         lunchRecipe: lunRecipeId,
//         breakfastTitle: bFTitle,
//         breakfastImg: bFImg,
//         breakfastRecipe: bFRecipeId,
//       },
//     },
//   };
//   axios.put(`/users/${id}`, updatedUserInfo).then((res) =>
//     setCurrentUserInfo((prev) => ({
//       ...prev,
//       sunday: {
//         dinnerTitle: dintitle,
//         dinnerImg: dinImg,
//         dinnerRecipeId: dinRecipeId,
//       },
//     }))
//   );

//   // .then(res=>setCurrentUserInfo(prev=>({...prev,  sunday:{dinnerImg:img, dinnerRecipe:recipeId, dinnerTitle:title}}} )))))
//   // setUpdatedCurrentUserInfo(prev=>({...prev, sunday:{dinnerTitle:title, dinnerImg:img, dinnerRecipeId:recipeId}}))
// }
// function mondayOnClick(
//   id,
//   dintitle,
//   dinImg,
//   dinRecipeId,
//   luntitle,
//   lunImg,
//   lunRecipeId,
//   bFTitle,
//   bFImg,
//   bFRecipeId
// ) {
//   // console.log(title, img , recipeId, id)
//   const updatedUserInfo = {
//     mealPlan: {
//       monday: {
//         dinnerTitle: dintitle,
//         dinnerImg: dinImg,
//         dinnerRecipe: dinRecipeId,
//         lunchTitle: luntitle,
//         lunchImg: lunImg,
//         lunchRecipe: lunRecipeId,
//         breakfastTitle: bFTitle,
//         breakfastImg: bFImg,
//         breakfastRecipe: bFRecipeId,
//       },
//     },
//   };
//   axios.put(`/users/${id}`, updatedUserInfo).then((res) =>
//     setCurrentUserInfo((prev) => ({
//       ...prev,
//       monday: {
//         dinnerTitle: dintitle,
//         dinnerImg: dinImg,
//         dinnerRecipeId: dinRecipeId,
//       },
//     }))
//   );

//   // .then(res=>setCurrentUserInfo(prev=>({...prev,  sunday:{dinnerImg:img, dinnerRecipe:recipeId, dinnerTitle:title}}} )))))
//   // setUpdatedCurrentUserInfo(prev=>({...prev, sunday:{dinnerTitle:title, dinnerImg:img, dinnerRecipeId:recipeId}}))
// }
// console.log(currentUserRecipes);

// function test() {
//   console.log("test");
// }
