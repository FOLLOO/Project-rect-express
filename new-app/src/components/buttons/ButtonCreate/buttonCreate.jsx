import './buttonCreate.css';
import { useNavigate } from 'react-router-dom'; 

function ButtonCreate()
{
  const navigate = useNavigate();
 return (
  <button className='button-create' onClick={() => navigate("/add-task")}>ДОБАВИТЬ</button>
 )
}

export default ButtonCreate;