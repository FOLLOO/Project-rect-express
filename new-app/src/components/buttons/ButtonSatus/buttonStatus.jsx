  import './buttonStatus.css';
  import React, { useEffect } from 'react';

  function ButtonSatus({Bstatus, onClick, status, disabled})
  {


  return (
    <>
    <h4 className='status-h4'>Статус:</h4>
    <button className={Bstatus || status ? "buttonStatusTrue buttonStatus" : "buttonStatusFalse buttonStatus"}
    onClick={onClick}
    disabled={disabled}
        >
          {Bstatus ? "Выполнено" : "Не выполнено"}
        </button>
    </>
  )
  }

  export default ButtonSatus;