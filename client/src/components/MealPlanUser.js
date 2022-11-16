export default function MealPlanUser(props) {
  function updateSelectUser() {
    props.updateUserInfo(props.user._id, 
      props.user.sunday,
      props.user.monday,
      props.user.tuesday,
      props.user.wednesday,
      props.user.thursday,
      props.user.friday,
      props.user.saturday,           
      );
    props.showUser();
  }


  return (
    <div>
      <li onClick={updateSelectUser}>{props.user.name}</li>
    </div>
  );
}
