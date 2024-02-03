import React from "react";


import ButtonBack from "../../components/buttons/ButtonBack/buttonBack";
import ButtonStatus from "../../components/buttons/ButtonSatus/buttonStatus"
import ButtonEdit from "../../components/buttons/ButtonEdit/buttonEdit"
import ButtonDelete from "../../components/buttons/ButtonDelete/buttonDelete"

import moment from "moment";
import { useDispatch } from "react-redux";
import { fetchRemoveTask } from "../../redux/slice/tasks";
import { useNavigate } from "react-router-dom";


function Task({
  _id,
  title, 
  description,
  dateStart,
  dateEnd,
  status,
  isLoading,
  isEditable,
}){
 const navigate = useNavigate();
const dispatch = useDispatch();

const onClickRemove = () => {
  if (window.confirm('точно удалить?')){
    dispatch(fetchRemoveTask(_id))
      navigate(-1)
  }

}
const onClickEdit = () => {
      navigate(`/task/${_id}/edit`)
}


  const dateT = new Date(dateStart);
  const dateD = new Date(dateEnd);
  const formateDate = new Intl.DateTimeFormat('ru-RU').format(dateT);
  const formattedDateEnd = moment(dateD, 'DD.MM.YYYY').format('YYYY-MM-DD');

  let parsedBlocks = null;

  try {
    const blocksData = JSON.parse(description);
    if (blocksData.blocks && blocksData.blocks.length > 0) {
      const text = blocksData.blocks[0].text;
      const paragraphs = text.split('\n');
  
      parsedBlocks = paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ));
    }
  } catch (error) {
    console.log("Error parsing JSON:", error);
  }
  
return(
  <>
  <div className="item-dark-bg">
          <h1 style={{color: "white" }}>{title}</h1>
          <ButtonBack/>
          </div>
          <div className="item-dark-bg">
            <h2>Дата начала</h2>
            <h2>{formateDate }</h2>
           <h2>Дата конца</h2>
           <h2>{formattedDateEnd}</h2>
          <ButtonStatus disabled={true} Bstatus={status}/>
          </div>
              <div className="item-dark-bg">
                  {parsedBlocks && (
                  <div style={{ color: "white", fontSize: "24px"}}>
                    {parsedBlocks}
                  </div>
                  )}
              </div>
          <div className="item-dark-bg">
          <button className='button-delete' onClick={onClickRemove }>УДАЛИТЬ</button>
          <button className='button-edit' onClick={onClickEdit }>РЕДАКТИРОВАТЬ</button>
          </div>
    </>
)
}

export default Task;