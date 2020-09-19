import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './card.jsx';
import Icon1 from './../assets/images/svg1.svg';
import Icon2 from './../assets/images/svg2.svg';
import Icon3 from './../assets/images/svg3.svg';
import Icon4 from './../assets/images/svg4.svg';
import Icon5 from './../assets/images/svg5.svg';
const useStyles = makeStyles({
  cards:{
  	width:'100%',
  	display:'flex',
  	justifyContent:'space-between',
  	margin:'30px 0'
  }
});
const Cards = ({butt}) => {
  const classes = useStyles();
  const [tab,settab] =React.useState([1,0,0])
  
  return (
    <div className={classes.cards}>
     {
      (butt===true)?<div className={classes.cards}>
      <Card title="Le participant et l'animateur sont à distance" exp="Visio,téléphone..." 
      selected={tab[0]} img={Icon1} 
      	onClick={() => {
      		settab([1,0,0])
      	}}/>
      <Card title="Le participant se déplace chez l'animateur" exp="Vos bureaux,labo..." img={Icon2} selected={tab[1]}
      	onClick={() => {
          settab([0,1,0])
      	}}/>
      <Card title="L'animateur se déplace chez le participant" exp="Chez lui,à son bureau..." img={Icon3} selected={tab[2]}
      	onClick={() => {
           settab([0,0,1])
      	}}/>
      	</div>
      	:<div className={classes.cards}>
        <Card title="Session automatisée" exp="Guidée par un systéme..." 
      selected={tab[0]} img={Icon4} 
      	onClick={() => {
      		settab([1,0,0])
      	}}/>
      <Card title="Questionnaire" exp="Formulaire" img={Icon4} selected={tab[1]}
      	onClick={() => {
          settab([0,1,0])
      	}}/>
      <Card title="Exercice en ligne" exp="Trie de carte..." img={Icon5} selected={tab[2]}
      	onClick={() => {
           settab([0,0,1])
      	}}/> 
      	</div>
      }
    </div>
  )
}

export default Cards;
