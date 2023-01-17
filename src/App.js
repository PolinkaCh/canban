import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Main from "./components/main/main"
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import uniqid from 'uniqid';



export default class App extends React.Component {
  constructor(props) {
    const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
    super(props);
    this.state = {
    tasks: initialState,

  }
  this.addNewTask = this.addNewTask.bind(this);
  this.addTask = this.addTask.bind(this);
}

setState(state){
  window.localStorage.setItem('tasks', JSON.stringify(state.tasks));   //Подключение localStorage
  super.setState(state.tasks);
  
}

addTask = (taskName,taskTitle) => {
  if (taskTitle){ 
  this.state.tasks.filter(tasks => tasks.name === taskName)[0].title = taskTitle;     //функция, перемещающая задачу в другой список
  }
  this.setState({
  tasks: this.state.tasks,
 })
}

addNewTask = (name, title) => { 
  if (title === "Backlog"){
    const newTask = {
      title: title,
      name: name,
      id: uniqid(),
      description: "",
    };
    if (newTask){   
      const newArray = this.state.tasks                   //функция, добавляющая задачу
      newArray.push(newTask)
      this.setState ({
      tasks: newArray, 
      })
    } 
  } else {
    this.addTask(name, title)
  }
}

  
  
  render (){
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main tasks={this.state.tasks} addTask = {this.addTask} addNewTask={this.addNewTask}/>
        <Footer tasks={this.state.tasks} name = "Polina" year="2022"/>
      </div>
    </BrowserRouter>
  );
}
}

