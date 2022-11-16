import React, {useState} from "react"
import MealPlanUpdate from './MealPlanUpdate'
export default function MealPlanBreakFast (props) {

    const [breakFast, setBreakFast] = useState({title:"", recipe:"", img:""})
    console.log(props.user.name)
    return (
        <div>
      
          <section>{props.title}</section>
          <h3>{props.recipe}</h3>
          <p>{props.img}</p>
        </div>
    )
}