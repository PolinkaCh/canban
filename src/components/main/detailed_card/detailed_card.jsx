import React from "react";
import cross from "./cross";
import save from "./save";
import "./detailed_card.css"
import Main from "../main";
import {Link} from "react-router-dom"


class Details extends React.Component {
    constructor (props){
        super (props);
        this.state = {descriptionState: this.props.openedTask.descriptionTask , close: "", name: "", color: false}
        this.handleClick = this.handleClick.bind (this)
        this.handleChange = this.handleChange.bind (this) 
    }

    handleClick = (e) =>{
        if (e.target.className.animVal === "cross"){               //функция закрытия страницы с деталями
            this.setState ({close: "closed"})
        } else if (e.target.className.animVal === "save") {          //функция сохранения описания
            console.log (this.props.tasks.filter(task => task.id === this.props.openedTask.idTask)[0].description)
            this.props.tasks.filter(task => task.id === this.props.openedTask.idTask)[0].description = this.state.descriptionState
            this.props.addNewTask (this.props.openedTask.titleTask)
            this.setState ({
                color: true
            })
        }   
    }

    handleChange = (e) => {                                   //функция для сохранения введённого в textarea значения
        const {target} = e
        this.setState({
            descriptionState: target.value,
            name: this.props.openedTask.titleTask
        });
    }

    render() {
        return (
            <>
            {this.state.close ? <Main tasks={this.props.tasks} /> : ''}     
            <div className="details">
                <div className="details_header">
                    <div className="details_name">{this.props.openedTask.titleTask}</div>
                    <div className="icons">
                        <div className="details_save" name ={this.props.openedTask.titleTask} style= {{fill: this.state.color ? "blue" : "black"}} onClick={this.handleClick}>{save}</div>
                        <Link to = "/">
                            <div className="details_close" onClick={this.handleClick}>{cross}</div>
                        </Link>
                    </div>
                </div>
                <textarea 
                    value = {this.state.descriptionState}
                    className= "details_description" 
                    placeholder="Здесь можно ввести описание..." 
                    onChange = {this.handleChange}></textarea>
            </div>
            </>

        )
    }
}

export default Details