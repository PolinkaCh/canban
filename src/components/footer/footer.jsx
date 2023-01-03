import React from "react";
import "./footer.css";

class Footer extends React.Component {
  render() {
    const {name, year}=this.props
    const backlogList = this.props.tasks.filter(task => task.title === "Backlog")
    const doneList = this.props.tasks.filter (task => task.title === "Finished")
    if (!backlogList.length || !doneList.length) return null;
    return (
      <div className="footer_tasks">
        <div className="tasks">
            <>
						<p key = {this.props.tasks.id} className="task">Active tasks: {backlogList.length} </p>
            <p key = {this.props.tasks.id} className="task"> Finished tasks: {doneList.length} </p>
            </>    
        </div>
        <p> Kanban board by {name}, {year}</p>
      </div>
    );
  }
}
export default Footer;