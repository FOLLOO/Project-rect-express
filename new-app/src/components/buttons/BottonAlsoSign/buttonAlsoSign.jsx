import './buttonAlsoSign.css';
import { useNavigate } from 'react-router-dom';

function ButtonAlsoSign()
{
  const navigate = useNavigate();
 return (
  <button className='media-button button-also-sign' onClick={() => navigate("/login")}>УЖЕ ЕСТЬ АККАУНТ?</button>
 )
}

export default ButtonAlsoSign;