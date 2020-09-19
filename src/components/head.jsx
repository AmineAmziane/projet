import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Cards from './../pattern/cards.jsx';
import Title from './../pattern/title.jsx';

const useStyles = makeStyles({
  root: {
    width: '750px',
    margin:'2em auto',
    textAlign:'left',
    boxShadow:'0 0 5px 2px rgba(0,0,0,0.2)',
    padding:'3em',
    borderRadius:10,
  },
  pop:{
  	color:'#002AAF',
  	fontSize:'24px',
  	fontWeight:'400',
  	fontFamily: 'orkneymed'
  },
  btn:{
    width:'200px',
    padding:'9px 0px',
    fontSize:'15px',
    margin:'0 20px 0 0',
    textTransform: 'none',
    borderRadius:5,
    fontFamily: 'orkneymed',
  },
  btnOui:props=>({
  	color:(props.button)?'#fff':'#2E5BCC',
  	backgroundColor:(props.button)?'#2e5bcc':'#fff',
  	border:(!props.button)?'1px solid #00f':'none',
  	"&:hover": {
        backgroundColor: (props.button)?'#2e5bcc':'rgba(200,200,200,0.2)',
    }
  }),
  btnNon:props=>({
  	color:(!props.button)?'#fff':'#2E5BCC',
  	backgroundColor:(!props.button)?'#2e5bcc':'#fff',
  	border:(props.button)?'1px solid #00f':'none',
  	"&:hover": {
        backgroundColor: (!props.button)?'#2e5bcc':'rgba(200,200,200,0.2)',
    }
  }),
});

const Head = () => {

  const [button,setbutton] =React.useState(true)
  const props = { button: button};
  const classes = useStyles(props);
  return (
    <div>
       <Typography variant="h5" component="h5" className={classes.pop} gutterBottom>
        Parlez-nous de votre projet
      </Typography>
      <Title text="La session sera t-elle guidée par un animateur ?
     " />
      <Button variant="primary" color="primary"  className={`${classes.btn} ${classes.btnOui}`} button={1} onClick={()=>{setbutton(true)}}>
        Oui
      </Button>
      <Button variant="primary" color="primary" className={`${classes.btn} ${classes.btnNon}`} button={0} onClick={()=>{setbutton(false)}}>
        Non
      </Button>
      <Title text="Comment se déroulera la session ? " />
        <Cards butt={button}/>     
    </div>
  )
}

export default Head;
