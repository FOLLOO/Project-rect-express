import  React from 'react';

import './ffilter.css'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function FFilter(){
return(
  <div className="container-d">
   
  <h4>Фильтер</h4>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoItem label="По дате">
      <DatePicker 
          slotProps={{
            openPickerIcon: { fontSize: 'normal' },
            openPickerButton: { color: 'success' },
            textField: {
              focused: true,
            },
          }} />
      </DemoItem>
    </LocalizationProvider>
    <div>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" color="success">По статусу</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio color="success" />} label="Выполнено" />
        <FormControlLabel value="male" control={<Radio  color="success"/>} label="Не выполнено" />
      </RadioGroup>
    </FormControl>
    
    </div>
  </div>
)
}

export default FFilter;