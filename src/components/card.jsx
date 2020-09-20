import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles({
  root :props=> ({
    width: '225px',
    minHeight: '200px',
    boxShadow:'0 2px 5px 1px rgba(0,0,0,0.2)',
    borderRadius:15,
    textAlign:'center',
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxSizing:'border-box',
    overflow:'hidden',
    border:(props.selected)?'1px solid #2E5BCC':'none',
    '@media (max-width: 780px)' : {
        width: '30%',
    },
  }),
  img : {
    width:'100%',
    height : 'auto'
  },
  svgdiv :{
    width:'100%',
    height:'50%',
    padding:'5px 0',
  },
  title:props=>({
    lineHeight:'20px',
    fontSize:'14px',
    fontWeight:'500',
    width:'90%',
    margin:'4px auto',
    color:(props.selected)?'rgba(255,255,255,1)':'rgba(0,0,0,0.6)',
    fontFamily: 'orkneymed'
  }),
  exp:props=>({
    lineHeight:'24px',
    fontSize:'13px',
    fontWeight:'400',
    margin:'0 0 10px 0',
    color:(props.selected)?'rgba(255,255,255,1)':'rgba(0,0,0,0.7)',
    fontFamily: 'orkneylight'
  }),
  cardAction:{
   borderRadius:15,
  },
  infodiv: props=>({
    backgroundColor:(props.selected)?'#2E5BCC':'transparent',
    color:'#000',
    padding:'20px 0',
    height:65,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    '@media (max-width: 780px)' : {
        height:'100px',
    },
    '@media (max-width: 500px)' : {
        height:'150px',
    }
  })
});
const Card = ({title,exp,selected,img,onClick}) => {
  const props = { selected: selected};
  const classes = useStyles(props);
  return (
    <div className={classes.root} onClick={onClick}>
      <CardActionArea className={classes.cardAction}>
        <div className={classes.svgdiv}>
         <img src={img} className={classes.img} alt="" />
        </div>
        <div className={classes.infodiv}>
        <Typography variant="subtitle1" className={classes.title} gutterBottom>
        {title}
        </Typography>
        <Typography variant="subtitle1" className={  classes.exp} gutterBottom>
          {exp}
        </Typography>
        </div>
        </CardActionArea>
    </div>
  )
}

export default Card;
