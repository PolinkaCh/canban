import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer"
import Main from "./components/main/main"
import data from "./mock-data.json"
import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    tasks: data.tasks
  }}
  
  
  render (){
    const addTask = (task)=> {
      console.log (task)
      this.setState (prevState=> ({
        tasks:[
          ...prevState.tasks, {
            task
          }

        ]
    }))
    }
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Main tasks={this.state.tasks} addTask={addTask}  />
      <Footer tasks={this.state.tasks} name = "Polina" year="2022"/>
    </div>
    </BrowserRouter>
  );
}
}

