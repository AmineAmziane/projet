import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
const useStyles = makeStyles({
	  div:{
     display:'flex',
     alignItems:'flex-end',
     margin:'30px 0',
     fontSize:'18px',
     color:'rgba(0,0,0,0.6)',
     fontFamily: 'orkneylight'
  }
})
const Title = ({text}) =>{
	const classes = useStyles();
	return(
       <Typography variant="subtitle1" className={classes.div}  gutterBottom>
        {text}
        <HelpOutlineIcon color="disabled" style={{ fontSize: 24,marginLeft:5}}/>
       </Typography>
	)
}
export default Title