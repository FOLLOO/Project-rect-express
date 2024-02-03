import './buttonSignIn.css';
import {  useNavigate } from 'react-router-dom';

function ButtonSignIn()
{
  const navigate = useNavigate();

 return (
  <button className='button-signIn media-button'  onClick={() => navigate("/registration")}>ЗАРЕГЕСТИРОВАТЬСЯ</button>
 )
}

export default ButtonSignIn;