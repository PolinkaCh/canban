import React from "react";
import {LIST_TYPES, LIST_COPY} from "../../../config.js"
import Card from "./card/card.jsx";



class List extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
        <div className="main">
        {Object.values(LIST_TYPES).map(type =>{
            const listTasks = this.props.tasks.filter(task => task.title === type)
            const alltasks = this.props.tasks
            return (
                <Card key = {type}
                     name ={LIST_COPY[type]} 
                     alltasks= {alltasks} 
                     tasks ={listTasks || []} 
                     addNewTask={this.props.addNewTask} 
                     openNewTask ={this.props.openNewTask}
                    />
            )
         })
        }
        </div>
    )}
}

export default List 