import React from "react";

import './MainPage.css';
import Footer from "../components/Footer/footer";
import Navigation from "../components/Navigation/navigation";
import HelloMain from "../components/HelloMain/helloMian.jsx";
import Time from "../components/Date/Time/time.jsx";
import Week from "../components/Date/Week/week.jsx";
import Month from "../components/Date/Month/month.jsx";


function MainPage(){


  return(
    <div className="page">
      <Navigation stylee={{visibility: "collapse"}}/>
      <Week styles={{ marginLeft: "55%", marginTop: "5%" }}/>
      <Time/>
      <Month styles={{  marginLeft: "5%",
  marginTop: "44%"}}/>
      <div className="content">
        <HelloMain/>
      </div>
      <Footer/>
    </div>
  )
    
}

export default MainPage;