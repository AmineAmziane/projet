import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
const CustomSlider = withStyles(theme => ({
  disabled: {
    color: theme.palette.primary.main,
    padding:0,
    trackSize: 20,
  },
  root:{
       display:'flex',
       alignItems:'center',
       width:'90%',
       margin:'5px auto',
       transform:'translateX(-10px)',
  },
  thumb: {
    padding:12,
    border:'6px solid #fff',
    boxShadow:'0 2px 5px 2px rgba(0,0,0,0.2)',
    backgroundColor:'#2E5BCC',
  },
  rail : {
      padding:'6px 10px',
      borderRadius:5,
      backgroundColor:'#fff',
      border:'1px solid #2E5BCC',
  },
  track :{
      padding:6,
      borderRadius:5,
      backgroundColor:'#2E5BCC',
  },
  mark :{
    padding:3,
    borderRadius:50,
    margin:'0 5px',
    backgroundColor:'#2E5BCC',
  },
  markActive:{
    backgroundColor:'#96ADE5',
  },
  valueLabel: {
    left: '0',
    borderRadius:'5px'
  },
}))(Slider);
const useStyles = makeStyles({
  root: {
    width:'100%',
    margin:'35px auto'
  },
  typo:{
    margin:10,
    fontSize:16,
    color:'#2E5BCC ',
    fontWeight:600,
    fontFamily: 'orkneylight',
    '@media (max-width: 550px)' : {
        width: '30%',
    }  
  }
});
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#2E5BCC',
    color: '#fff',
    maxWidth: 220,
    fontSize:14,
    fontWeight:600,
    borderRadius:'10px',
    padding:'10px',
    fontFamily: 'orkneylight'
  },
  arrow: {
    color: '#2E5BCC',
  },
}))(Tooltip);
function ValueLabelComponent({ children, open, value }) {
  return (
    <HtmlTooltip arrow open={open} enterTouchDelay={0} placement="bottom" title={value}>
      {children}
    </HtmlTooltip>
  );
}

const SliderA = ({marks,max,first,last,defvalue}) => {
  function valueLabelFormat(value) {
     return `${marks[value]}`;
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CustomSlider
        min={0}
        defaultValue={defvalue}
        step={1}  
        max={max} 
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto" 
        ValueLabelComponent={ValueLabelComponent}
        valueLabelFormat={valueLabelFormat}
        marks 
      />
    <Grid container  justify="space-between">
    <Typography variant="h6" className={classes.typo} gutterBottom>
        {first}
      </Typography>
      <Typography variant="h6" className={classes.typo}  gutterBottom>
        {last}
      </Typography>
    </Grid>
    </div>
  )
}

export default SliderA;
