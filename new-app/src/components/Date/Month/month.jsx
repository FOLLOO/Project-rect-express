import React  from "react";
import './month.css'

function Month({styles}){

  const time = new Date();
  const month = time.toLocaleString('en-US', { month: 'long' });


  return (
    <div className="month" style={styles}>
    <p>{month}</p>
    </div>
  )
}

export default Month;