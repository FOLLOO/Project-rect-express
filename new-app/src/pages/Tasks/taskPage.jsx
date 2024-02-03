import React from "react";
import { useState, useCallback} from 'react';
import { Navigate, useParams } from "react-router-dom";

import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";


import Time from "../../components/Date/Time/time";
import Week from "../../components/Date/Week/week";

import './taskPage.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


import Month from "../../components/Date/Month/month";
import axios from "axios";
import Task from "../../components/Task/task";
import { useSelector } from "react-redux";
import { SelectIsAuth } from "../../redux/slice/auth";

function TaskPage() {

  const isAuth = useSelector(SelectIsAuth);

  const [data, setData] = React.useState([]);

  const [loading, setLoading] = useState(false)

  const { id } = useParams();



  
  
  React.useEffect(() => {
    axios
    .get(`/task/${id}`)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      console.log('Error to take task from DB', err.response?.data || err.message)
    });
  }, []);

  if (!window.localStorage.getItem("token") && !isAuth){
    return <Navigate to="/"/>
  }

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <div className="page">
      <Navigation />
      <Time styles={{ marginLeft: "2%", marginTop: "5%" }} />
      <Week styles={{ marginLeft: "55%", marginTop: "1%" }}/>
      <Month/>
      <div className="content">
        <div className="glasses-background">
          <Task 
          _id={data._id}
          title={data.title}
          description={data.description}
          dateStart={data.dateStart ? new Date(data.dateStart) : null}
          dateEnd={data.dateEnd ? new Date(data.dateEnd) : null}
          status={data.status}
          isLoading={true}
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TaskPage;