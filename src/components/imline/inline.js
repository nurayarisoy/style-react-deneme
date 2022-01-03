import React from 'react'
import{myStyles} from "./styles"
//const myStyles={
//paragraf :{
  //      color: "grey",
   //     fontSize:"3rem",
      //  fontweight:"bolder"

 //   },
//seconddiv:{
    //backgraoundColor:"#ffff"

 //   }
//}

const Inline = () => {
    return (
        <div style={{ backgroundColor:"blue", color:"red"}}>
            <h1 style={{color:"black", fontSize:"3rem"}}>claruswey</h1>
            <p style={myStyles.paragraf}>inline from styling</p>
            <div style={myStyles.seconddiv}>
                <p>second div</p>
            </div>
        </div>
    )
}

export default Inline