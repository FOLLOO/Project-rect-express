import React, {useState, useEffect}  from "react";
import './week.css'

function Week({styles}){

  const time = new Date();
  const week = time.getDay();
  let wak;

  switch (week){
    case 1 : 
    wak = 'Monday'
    break;
    case 2 : 
    wak = 'Tuesdat'
    break;
    case 3 : 
    wak = 'Wednesday'
    break;
    case 4 : 
    wak = 'Tuesday'
    break;
    case 5 : 
    wak = 'Friday'
    break;
    case 6 : 
    wak = 'Saturday'
    break;
    default :
    wak = 'Sunday'
  }

  return (
    <div className="week" style={styles}>
    <p>{wak}</p>
    </div>
  )
}

export default Week;