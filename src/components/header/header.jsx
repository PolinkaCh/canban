import React from 'react'
import "./header.css"
import arrow from "./static/arrow.svg" 
import userImage from"./static/user-avatar.svg"


class Header extends React.Component {
render (){
  return (
    <div className="header">
      <h1 className="header_head">Awesome Canban Board</h1>
      <div className="header_avatar_block">
      <svg className="header_avatar" src={userImage} alt="avatar"></svg>
      <svg className="header_avatar_arrow" src={arrow} alt=""></svg>
      </div>
    </div>
    
  )
}
} 

export default Header