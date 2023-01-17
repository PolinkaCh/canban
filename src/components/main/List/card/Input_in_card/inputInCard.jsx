import React from "react";
import "./inputInCard.css";
import data from "../../../../../mock-data.json";
import uniqid from "uniqid"


class InputInCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "", 
      buttonText: "+ Add task",
      taskForSelect: '', 
      titleTask: "", 
      disabled: false
    };
    this.handleSubmit = this.handleSubmit.bind (this);
    this.handleChange = this.handleChange.bind(this);
    this.change = this.change.bind (this);
  }

  handleChange = (event) => {
    const { target } = event;
    this.setState({
      task: target.value,
      titleTask: target.name
    });
  }

  componentDidMount =()=> {
    this.change()
  }

  change =()=> {
    if (this.props.name === "Ready" && this.props.alltasks.every(task => task.title !== "Backlog")){
      this.setState ({
        disabled: true,
      }) 
    } else if (this.props.name === "In Progress" && this.props.alltasks.every(task => task.title !== "Ready")) {
      this.setState ({
        disabled:  true,
      })
    } else if (this.props.name === "Finished" && this.props.alltasks.every(task => task.title !== "In Progress")) {
      this.setState ({
        disabled:  true,
      })} 
  }
  
  handleClick = (e) => {
    const { target } = e;               //функция для отображения правильных списков для select
    switch (target.name){
    case ("Ready"):
        this.setState({taskForSelect: "Backlog"})
        break;
      case ("In Progress"):
        this.setState({taskForSelect: "Ready"})
        break;
      case ("Finished"):
        this.setState({taskForSelect: "In Progress"})
        break;
      default: this.setState({taskForSelect: ""})
    }
    this.setState({ buttonText: "Submit" });
  };
  
  handleSubmit = ()=> {
    if (this.state.task) {                                            //функция, отправляюзая данные для добавления новой задачи или редактирования существующей
      this.props.addNewTask(this.state.task, this.state.titleTask)
    };
    this.setState ({
      buttonText: "+ Add task",
      task: '',
    }) 
}


  render() {
    return (
      <>
      <div>
        {this.props.name === "Backlog" ?                     //условие для отображения input в backlog и select в остальных
          <input
            className ="input"
            name = {this.props.name}
            type ="text"
            value = {this.state.task}
            onChange = {this.handleChange}
            style = {{display: this.state.buttonText === "+ Add task" ? "none" : "flex" }}         
          /> :
          <>
          <form action="formdata" id="data"/>
          <select name = {this.props.name} 
                  value={this.state.task} 
                  onChange={this.handleChange} 
                  form="data" 
                  className="tasks-select"  
                  style= {{display: this.state.buttonText === "+ Add task" ? "none" : "flex" }}>
            <option className = "options" ></option>
            {Object.values(this.props.alltasks)
                  .filter (task => task.title === this.state.taskForSelect)
                  .map(tasks =><option title = {this.props.tasks.title} key = {uniqid()} className = "options">{tasks.name}</option>)}
          </select>
          </>
        }

        <button name = {this.props.name} 
                disabled={this.state.disabled} 
                style= {{cursor: this.state.disabled ? "" : "pointer" }} 
                className="fullCard_add" 
                onClick={this.state.buttonText === "+ Add task" ? this.handleClick : this.handleSubmit} 
                form = {this.state.buttonText === "+ Add task" ? "" : data}>
        {this.state.buttonText}
        </button>
      </div>
      </>
    );
  }
}
export default InputInCard;
