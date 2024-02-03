import React, {useState, useEffect} from "react";
import './time.css'

function Time({styles}){



  const [time, setTime] = useState(new Date()); 
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); 
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="time" style={styles}>
    <p>{hour} h</p>
    <p>{minute} m</p>
    <p>{seconds} s</p>
    </div>
  )
}

export default Time;