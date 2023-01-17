import React from 'react'
import "./header.css"
import arrowSvg from "./static/arrow.jsx" 
import avatarSvg from"./static/user-avatar.jsx"
import menuSvg from './static/rectangle'
import arrowDownSvg from './static/arrow_menu_down'


class Header extends React.Component {
  constructor (props){
    super(props);
    this.state = {clicked: false};
  }
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }
render (){
  return (
    <div className="header">
      <h1 className="header_head">Awesome Canban Board</h1>
      <div className="header_avatar_block" onClick={this.handleClick}>
      <div className="header_avatar">{avatarSvg}</div>
      <div className='menuSvg' style={{display: this.state.clicked ? "block" : "none"}}>{menuSvg}</div>
      <ul className="menu" style={{display: this.state.clicked ? "block" : "none"}}>
        <li className='menu_content'><a href=''>Profile</a></li>
        <li className='menu_content'><a href=''>Log Out</a></li>
      </ul>
      <div className = "header_avatar_arrow" style={{display: this.state.clicked ? "none" : "block"}}>{arrowSvg}</div>
      <div className = "header_avatar_arrow arrow_down" style={{display: this.state.clicked ? "block" : "none"}}>{arrowDownSvg}</div>
      </div>
    </div>
    
  )
}
} 

export default Header