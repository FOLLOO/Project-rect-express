import ButtonSatus from '../../buttons/ButtonSatus/buttonStatus';
import './taskItem.css';

function TaskItem({
  title, 
  description,
  date,
  isOwner,
  status
}){

 

const dateT = new Date(date);
const formateDate = new Intl.DateTimeFormat('ru-RU').format(dateT);
  return(
    <div className='task-item'>
        <h3 className='task-item-title child-task-item'>{title}</h3>
        <h4 className='task-item-date child-task-item'>Deadline: {formateDate}</h4>
        <ButtonSatus Bstatus={status}/>
    </div>
  );
}

export default TaskItem