import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from './head.jsx';
import Body from './body.jsx';
import Foot from './foot.jsx';

const useStyles = makeStyles({
  root: {
    width: '750px',
    margin:'2em auto',
    textAlign:'left',
    boxShadow:'0 0 5px 2px rgba(0,0,0,0.2)',
    padding:'3em',
    borderRadius:10,
    '@media (max-width: 780px)' : {
        width: '80%',
        margin:'4em auto',
        padding:'1em 2em',
    }
  }
});

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Head/>     
       <Body/>
       <Foot/>
    </div>
  )
}

export default Index;
