import ButtonSatus from '../../buttons/ButtonSatus/buttonStatus';
import './taskItem.css';

function TaskItem({
  title, 
  description,
  date,
  isOwner,
}){
const dateT = new Date(date);
const formateDate = new Intl.DateTimeFormat('ru-RU').format(dateT);

  return(
    <div className='task-item'>
        <h3 className='task-item-title child-task-item'>{title}</h3>
        <h4 className='task-item-description child-task-item'>{description}</h4>
        <h4 className='task-item-date child-task-item'>{formateDate}</h4>
        <h4 className='task-item-status-title child-task-item'>Статус:</h4>
        <ButtonSatus/>
    </div>
  );
}

export default TaskItem