import MealPlanDay from "./MealPlanDay";

export default function MealPlan() {

  return (<div>
    <select/>
    
    <div className="meal-plan-div">
      <div>
        <h1>Sunday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Monday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Tuesday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Wednesday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Thursday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Friday</h1>
        <MealPlanDay/>
      </div>
      <div>
        <h1>Saturday</h1>
        <MealPlanDay/>
      </div>
    </div>
    </div>
  );
}
