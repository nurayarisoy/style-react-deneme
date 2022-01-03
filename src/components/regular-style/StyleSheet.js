import React from 'react'
import "./StyleSheet.css"
const StyleSheet = (props) => {
    const insPrimary= props.btnName ? "primary":"secondary"
    return (
        <div>
        <img className="logo" src="https://ok7static.oktacdn.com/fs/bco/1/fs02can9tp2LVLfKM357" alt="clarusway-logo" /> 
         <h1 className ="header" >welcome to class</h1> 
          <p className={insPrimary}>{props.btnName}</p>
          </div>


    )
}

export default StyleSheet
