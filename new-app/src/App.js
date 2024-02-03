import React from 'react';

// import './App.css';
import './index.css';

import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage.jsx';
import LoginPage from './pages/LogIn/loginPage.jsx';
import RegistrationPage from './pages/Registration/registrationPage.jsx';
// import { TasksPage, TaskPage } from './pages/Tasks';
import  TaskPage from './pages/Tasks/taskPage.jsx'
import  TasksPage from './pages/Tasks/tasksPage.jsx'
import TaskPageAdd from './pages/TaskAdd/TaskPageAdd.jsx';
import instance from './axios.js';
import { useDispatch, useSelector } from 'react-redux';
import { SelectIsAuth, fetchAuthMe } from './redux/slice/auth.js';




function App() {

const dispatch = useDispatch();
const isAuth = useSelector(SelectIsAuth);


React.useEffect(() => {
 dispatch(fetchAuthMe());
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/tasks" element={<TasksPage/>}/>
          <Route path="/add-task" element={<TaskPageAdd/>}/>
          <Route path="/task/:id" element={<TaskPage/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
