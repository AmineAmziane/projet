import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Title from './../pattern/title.jsx';
import TextField from '@material-ui/core/TextField';

const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `10px`,
      }
    }
  }
})(TextField);

const Foot = () => {
  return (
    <div>
     <Title text="Nombre de participant" />
      <CustomTextField
          id="standard-number"
          type="number"
          defaultValue="8"
          variant="outlined"
          inputProps={{style: {fontSize: 24,width:100,borderRadius:50,padding:'9px 10px',color:"#002AAF",}}}
        />
    </div>
  )
}

export default Foot;
