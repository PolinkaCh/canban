import React from "react";
import "./inputInCard.css";


class InputInCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {task: "", buttonText: "+ Add task"};
    this.handleSubmit = this.handleSubmit.bind (this)
  }
  handleChange = (event) => {
    const { target } = event;
    const value = target.value;
    this.setState({
      task: value
    });
  };
  handleClick = () => {
    this.setState({ buttonText: "Submit" });
  };

  handleSubmit = ()=> {
    if (this.state.task) {
      this.props.addNewTask(this.state.task)
    }
    this.setState ({
      task: '',
      buttonText: "+ Add task"
    })

  }

  render() {
    return (
      <>
      <div>
          <input
            className="input"
            name="addTask"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
            style= {{display: this.state.buttonText === "+ Add task" ? "none" : "flex" }}
          
          />
        <button className="fullCard_add" onClick={this.state.buttonText === "+ Add task" ? this.handleClick : this.handleSubmit}>
          {this.state.buttonText}
        </button>
      </div>
      </>
    );
  }
}
export default InputInCard;
