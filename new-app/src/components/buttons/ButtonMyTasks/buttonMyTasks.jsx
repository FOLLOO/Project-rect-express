import './buttonMyTasks.css';
import { useNavigate } from 'react-router-dom'

function ButtonMytasks()
{
 const navigate = useNavigate()
 return (
  <button className='button-my-tasks' onClick={() => navigate('/tasks')}>МОИ ЗАДАЧИ</button>
 )
}

export default ButtonMytasks;