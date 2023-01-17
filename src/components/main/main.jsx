import React from "react"
import Details from "./detailed_card/detailed_card"
import "./main.css"
import {Route, Routes} from 'react-router-dom';
import List from "./List/list"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {openedTask: ""}
    this.openNewTask = this.openNewTask.bind(this)
  }
  
openNewTask = (title, id, description) => {
  const openedTask = { 
    titleTask: title, 
    idTask: id, 
    descriptionTask: description,
  }
  this.setState ({
    openedTask: openedTask
  })    // Функция, открывающая задачу
}
  render(){
    return (
      <div className="list">
        <Routes> 
            <Route path = "/task/:idTask" element = {<Details tasks={this.props.tasks} openedTask = {this.state.openedTask} addNewTask = {this.props.addNewTask}/>}/> :
            <Route path = "/" element = {<List tasks={this.props.tasks} addTask = {this.props.addTask} addNewTask={this.props.addNewTask} openNewTask= {this.openNewTask} />}/>
        </Routes>
      </div>
    )
  }
}
export default Main