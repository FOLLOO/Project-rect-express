import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import './helloMain.css'
import { SelectIsAuth } from '../../redux/slice/auth.js';

function HelloMain()
{

  const isAuth = useSelector(SelectIsAuth);

  return (
    <>

    <div className="frame">
      <div className='frame-half'>
      <h4>
        привет!
      </h4>
      <p>
      данное web-приложение разработано для менеджмента твоих задач
      </p>
      </div>
    </div>

       <div className="frame">
      <div className='frame-half'>
      <h4>
      что я могу?
      </h4>
      <ul>
      <li>создавать и управлять задачами</li>
      <li>искать нужную задачу</li>
      <li>следить за deadline </li>
      </ul>
    </div>
    </div> 
    <div className="block">
      {isAuth ? (
        <>
        </>
      ) : (
        <blockquote>Чтобы начать нажмите "<Link to="/login">Войти</Link>"</blockquote>

      )}
    </div>
    
    </>
  )
}

export default HelloMain;