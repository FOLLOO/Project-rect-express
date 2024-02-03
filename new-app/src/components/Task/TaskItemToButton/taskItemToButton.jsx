import './taskItemToButton.css';
import { useNavigate } from 'react-router-dom';

function TaskItemToButton({children , _id})
{
  const navigate = useNavigate();
 return (
  <button className='task-item-to-button' onClick={() => navigate(`/task/${_id}`)}>{children}</button>
 )
}

export default TaskItemToButton;