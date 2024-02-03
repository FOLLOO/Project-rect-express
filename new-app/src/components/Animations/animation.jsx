import React from "react";
import './animation.css'

function TextAnimation(props){
  return(

    <>
    <div class="wrapper">
    <div class="typing-demo">
      <p >{props.text}</p>
    </div>
    </div>
    </>
  )
}

export default TextAnimation;