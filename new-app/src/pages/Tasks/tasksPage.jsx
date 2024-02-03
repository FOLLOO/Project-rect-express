import React, { useState } from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


import './tasksPage.css'


import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";
import Time from "../../components/Date/Time/time";
import Week from "../../components/Date/Week/week";
import Month from "../../components/Date/Month/month";
import TaskItem from "../../components/Task/TaskItem/taskItem.jsx"
import TaskItemToButton from "../../components/Task/TaskItemToButton/taskItemToButton.jsx";
import ButtonCreate from "../../components/buttons/ButtonCreate/buttonCreate.jsx";
import FFilter from "../../components/FFilter/ffilter.jsx";

import { fetchTasks } from "../../redux/slice/tasks.js";
import { SelectIsAuth } from "../../redux/slice/auth.js";
import { EditorState, convertFromRaw } from "draft-js";

function TasksPage(){
  const isAuth = useSelector(SelectIsAuth);
  const dispatch = useDispatch();
  const { tasks } = useSelector(state => state.tasks)
  const isTasksLoading = tasks.status === 'loading';
  const userData = useSelector((state) => state.auth.data)
  const [data, setData] = React.useState([]);




  React.useEffect(() => {
    dispatch(fetchTasks());
  }, []) ;

  const tasksPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * tasksPerPage;
  const endIndex =  Math.min(startIndex + tasksPerPage);
  const filteredTasks = tasks.items.filter(obj =>
    userData && obj && userData._id === (obj?.user?._id || null)
  );
  const displayedTasks = isTasksLoading
    ? [...Array(tasksPerPage)]
    : filteredTasks.slice(startIndex, endIndex);

    
    const [value, setValue] = useState('');

    const filterTasks = filteredTasks.filter(items => 
      items.title.toLowerCase().includes(value.toLowerCase())
      );
    
    if(!window.localStorage.getItem("token") && !isAuth){
      return <Navigate to="/"/>
    }

  return (
    <div className="page">
      {/* должна быть кнопка ВЫЙТИ ПОИСК ПРОФИЛЬ */}
      <Navigation  
      value={value}
      onChange={(event) => setValue(event.target.value)}
      /> 
      <Time styles={{ marginLeft: "2%", marginTop: "5%" }} />
      <Week/>
      <Month/>
      <div className="content ">
      <div className="glasses-background">

       <h4 className="glasses-h4" >Мои Задачи</h4>
        {/* Тут должен быть фильтер */}
        <FFilter/>
         {filterTasks.map((obj, index) => (
          userData && obj && userData._id === (obj?.user?._id || null)) && (
            <TaskItemToButton key={index} _id={obj?._id}>
              <TaskItem
                title={isTasksLoading ? "Задача грузится" : obj?.title}
                description={isTasksLoading ? "..." : obj?.description}
                date={obj?.dateEnd ? obj.dateEnd : null}
                isOwner={userData ? userData._id === (obj?.user?._id || null) : null}
                status={isTasksLoading ? "Задача грузится" : obj?.status}
              />
            </TaskItemToButton>
          
          ))}
   
          <Pagination
            count={Math.ceil(filteredTasks.length / tasksPerPage)}
            page={currentPage}
            onChange={handleChangePage}
            variant="outlined"
            color="secondary"
            style={{ marginTop: '20px' }}
          />
        <ButtonCreate/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default TasksPage;