import React  from "react";
import './month.css'

function Month(){

  const time = new Date();
  const month = time.toLocaleString('en-US', { month: 'long' });
  // const month = time.getUTCMonth() + 1;
  // let wak;

  // switch (week){
  //   case 1 : 
  //   wak = 'Monday'
  //   break;
  //   case 2 : 
  //   wak = 'Tuesdat'
  //   break;
  //   case 3 : 
  //   wak = 'Wednesday'
  //   break;
  //   case 4 : 
  //   wak = 'Tuesday'
  //   break;
  //   case 5 : 
  //   wak = 'Friday'
  //   break;
  //   case 6 : 
  //   wak = 'Saturday'
  //   break;
  //   default :
  //   wak = 'Sunday'
  // }

  return (
    <div className="month">
    <p>{month}</p>
    </div>
  )
}

export default Month;