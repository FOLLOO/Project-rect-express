import './buttonLogIn.css';
import { useNavigate } from 'react-router-dom'


function ButtonLogIn()
{
 const navigate = useNavigate()
 return (
  <button className='buttonLogIn' onClick={() => navigate('/login')} >ВОЙТИ</button>
 )
}

export default ButtonLogIn;