export default function MealPlanUser(props) {
  function updateSelectUser() {
    props.updateUserInfo(props.user._id, 
      props.user.sundayBreakfast,
      props.user.sundayLunch,
      props.user.sundayDinner,
      props.user.mondayBreakfast,
      props.user.mondayLunch,
      props.user.mondayDinner,
      props.user.tuesdayBreakfast,
      props.user.tuesdayLunch,
      props.user.tuesdayDinner,
      props.user.wednesdayBreakfast,
      props.user.wednesdayLunch,
      props.user.wednesdayDinner,
      props.user.thursdayBreakfast,
      props.user.thursdayLunch,
      props.user.thursdayDinner,
      props.user.fridayBreakfast,
      props.user.fridayLunch,
      props.user.fridayDinner,
      props.user.saturdayBreakfast,
      props.user.saturdayLunch,
      props.user.saturdayDinner         
      );
    props.showUser();
  }
console.log(props)

  return (
      <option  onClick={updateSelectUser}>{props.user.name}</option>
     
    );
}
