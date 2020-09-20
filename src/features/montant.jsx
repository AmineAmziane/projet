import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: '379px',
    height: 'auto',
    backgroundColor:'#2E5BCC',
    color:'#fff',
    fontFamily: 'orkneymed',
    borderRadius:25,
    overflow:'hidden',
    margin:'2em',
    boxShadow:'0 2px 5px 1px rgba(0,0,0,0.2)'
  },
  title:{
    backgroundColor:'#FE5071',
    padding:'1em',
    fontFamily: 'orkneymed',
  },
  field:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'1.5em 0',
    fontFamily: 'orkneymed',
  },
  h6:{
    margin:'0 1em',
    fontFamily: 'orkneymed',
    '@media (max-width: 400px)' : {
        fontSize:12
     }  
  },
  subtitle1:{
    margin:'1.65em 0 ',
    fontFamily: 'orkneymed',
    fontSize:12
  },
  body2:{
    fontFamily: 'orkneymed',
    fontSize:16
  }
});
const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `10px`,
      }
    }
  }
})(TextField);
const Montant = () => {
  const classes = useStyles();
  return (
      <Box  className={classes.root}>
       <Typography variant="h6" className={  classes.title} gutterBottom>
          Montant recommandé
        </Typography>
        <div>
        <div className={classes.field}>
          <CustomTextField
          id="standard-read-only-input"
          defaultValue="55€"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          inputProps={{style: {
            fontSize: 24,
            width:135,
            borderRadius:10,
            padding:'9px 10px',
            color:"#002AAF",
            backgroundColor:'#fff',
            fontFamily: 'orkneymed',
            textAlign:'right',
          }}}
        />
        <Typography variant="h6"  className={classes.h6} gutterBottom>
           /participant
          </Typography>
        </div>
          <Typography variant="body2" className={classes.body2} gutterBottom>
           Soit 330€ pour 8 participants
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle1}gutterBottom>
           Ce montant est calculé sur étude des prix constatés.
          </Typography>
        </div>
      </Box>
  )
}

export default Montant;
