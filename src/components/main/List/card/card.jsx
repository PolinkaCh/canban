import React from "react"
import "./card.css"
import InputInCard from "./Input_in_card/inputInCard"
import {Link} from 'react-router-dom'
import uniqid from 'uniqid';

class Card extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind (this)
}

  handleClick = (e) => { 
    const {title, id} = e.target
    this.props.openNewTask(title, id, e.target.attributes[3].nodeValue)
  }

  render (){
    const {name, addNewTask,tasks} = this.props
    return (
      <div className="fullCard">
      <h1 className="fullCard_name">{name}</h1>
      {tasks.map(task => {
        return (
          <Link key = { uniqid () } to ={`task/${task.id}`}>
            <div key = { uniqid () } 
                 id = {task.id} 
                 title = {task.name} 
                 className = "task_item" 
                 description = {task.description}
                 onClick = {this.handleClick}>{task.name}</div>
          </Link>
        )})}
      <InputInCard addNewTask = {addNewTask} 
                    alltasks= {this.props.alltasks} 
                    name = {name} tasks = {tasks}
                    />
      </div>
    )
  }
}
export default Card