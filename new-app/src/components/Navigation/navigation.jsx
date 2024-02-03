import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'

import './navigation.css'
import '../../components/buttons/ButtonLogOut/buttonLogOut.css';


import logo from '../../img/logo.svg';
import ButtonLogin from '../buttons/ButtonLogIn/buttonLogIn.jsx' 

import { SelectIsAuth, logout } from "../../redux/slice/auth.js";
import ButtonMytasks from '../buttons/ButtonMyTasks/buttonMyTasks.jsx';



function Navigation()
{
  const dispatch = useDispatch();
  const isAuth = useSelector(SelectIsAuth);


  const onClickLogOut = () => {
    if (window.confirm('Вы точно хотите выйти?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  }

    return (
      <nav>
    <div className='nav'>
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
      {isAuth ? (
        <>
            <input 
            // style={{width: }}
            className='text-box'
            type={"text"} 
            placeholder={'Поиск'}
            ></input>
      <ButtonMytasks/>
      <button className='buttonLogOut' onClick={onClickLogOut} >ВЫЙТИ</button>
      </>
      ) : (
        <ButtonLogin/>
      )}
            
      </div>
    </nav>
    )

}

export default Navigation;