import React from "react"
import "./card.css"
import InputInCard from "./Input_in_card/inputInCard"

class Card extends React.Component{
  render (){
    return(
      <div className="fullCard">
      <h1 className="fullCard_name">{this.props.name}</h1>
      {this.props.tasks.map(task => {
        return (
          <div key = {task.id} className = "task_item">{task.name}</div>
        )})}
      <InputInCard addNewTask = {this.props.addNewTask}/>
      </div>
    )
  }
}
export default Card