import './buttonLogOut.css';

import { useNavigate } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { logout } from '../../../redux/slice/auth';

function ButtonLogOut()
{
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const onClickLogOut = () => {
    if (window.confirm('Вы точно хотите выйти?')) {
      dispatch(logout());
      navigate("/"); // переход на главную страницу после выхода
    }
  }
 return (
  <button className='buttonLogOut media-button' onClick={onClickLogOut} >ВЫЙТИ</button>
 )
}

export default ButtonLogOut;