import './buttonBack.css';
import { useNavigate } from 'react-router-dom';

function ButtonBack()
{
  const navigate = useNavigate();
 return (
  <button className='media-button button-back' onClick={() => navigate(-1)}>НАЗАД</button>
 )
}

export default ButtonBack;