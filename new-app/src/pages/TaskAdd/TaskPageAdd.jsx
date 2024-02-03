import React from "react";
import { useState, useCallback} from 'react';
import moment from "moment";

import Footer from "../../components/Footer/footer";
import Navigation from "../../components/Navigation/navigation";
import ButtonBack from "../../components/buttons/ButtonBack/buttonBack";
import ButtonStatus from "../../components/buttons/ButtonSatus/buttonStatus"
import ButtonSave from "../../components/buttons/ButtonSave/buttonSave"
import Time from "../../components/Date/Time/time";
import Week from "../../components/Date/Week/week";

import './TaskPageAdd.css'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState , convertToRaw, ContentState } from 'draft-js';
import { Editor  } from "react-draft-wysiwyg";
import { TextField } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers";
import Month from "../../components/Date/Month/month";
import { useSelector } from "react-redux";
import { SelectIsAuth } from "../../redux/slice/auth";
import { useNavigate , Navigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

function TaskPageAdd() {

  const isAuth = useSelector(SelectIsAuth);
  const navigate = useNavigate();
  const [description, setDescription] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [dateEnd, setdateEnd] = React.useState();
  const [isLoading, setLoading] = React.useState(false)


  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onSubmit = async () => {
    console.log(title, convertToRaw(editorState.getCurrentContent()), dateEnd);
    try {
      setLoading(true);
      const fields = {
        title, 
        description: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        dateEnd: moment(dateEnd, 'DD.MM.YYYY').format('YYYY-MM-DD'),
      }
      const { data } = await axios.post('/task', fields);
      
      const id = data._id;

      navigate(`/task/${id}`)
    } catch(err) {
      console.warn(err);
      alert('Ошибка при создании статьи')
    }
  }

  if (!window.localStorage.getItem("token") && !isAuth){
   return <Navigate to="/"/>
  }
  return (
    <div className="page">
      <Navigation/>
      <Time styles={{ marginLeft: "2%", marginTop: "5%" }} />
      <Week styles={{ marginLeft: "58%", marginTop: "1%" }}/>
      <Month/>

      <div className="content">
        <div className="glasses-background">
          <div className="item-dark-bg">
          <TextField variant="standard" 
          placeholder="Заголовок"  
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <ButtonBack/>
          </div>
          <div className="item-dark-bg">
            <h2>Дата начала</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                  value={dayjs()} 
                  InputProps={{
                    disableUnderline: true,
                   }}
                  hideOpenPickerButton 
                  slotProps={{
                    openPickerIcon: { fontSize: 'normal' },
                    openPickerButton: { color: 'success' },
                    textField: {
                      focused: true,
                      InputProps: {disableUnderline: true}
                    },
                  }} />
           </LocalizationProvider>
           <h2>Дата конца</h2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker 
                  value={dateEnd}
                  onChange={setdateEnd}
                  slotProps={{
                    openPickerIcon: { fontSize: 'normal' },
                    openPickerButton: { color: 'success' },
                    textField: {
                      focused: true,
                    },
                  }} />
           </LocalizationProvider>
          <ButtonStatus/>
          </div>
          <div className="item-dark-bg">
          <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
          />
          
          </div>
          <div className="item-dark-bg">
            <span/>
            <button className='buttonSave' onClick={onSubmit} >Сохранить</button>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TaskPageAdd;