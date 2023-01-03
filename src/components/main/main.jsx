import React from "react"
import Card from "./card/card"
import "./main.css"
import {LIST_TYPES, LIST_COPY} from "../../config.js"

class Main extends React.Component {
  
  render(){
    const addNewTask = (name)=> {
      const newTask = {
      title: LIST_TYPES.BACKLOG,
      name: name
    }
    console.log (newTask)
    if (newTask){
    this.props.addTask(newTask)
    }
  }
    return (
      <div className="main">
        {Object.values(LIST_TYPES).map(type =>{
          const listTasks = this.props.tasks.filter(task => task.title === type)
          return (
            <Card key = {type} name ={LIST_COPY[type]} tasks ={listTasks || []} addNewTask={addNewTask}/>
          )
        })}
      </div>
    )
  }
}
export default Main