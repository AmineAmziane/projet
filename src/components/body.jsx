import React from 'react';
import SliderA from './../pattern/slider.jsx';
import Title from './../pattern/title.jsx';

const marks = [
  '10 min','20 min','30 min','40 min','50 min','1h','1h30','2h','2h30','3h','3h30','4h','4h30','5h','1jour'
];
const marks2 = [
  'Tout le monde','Collége','Grand public','Complexité modérée','Complexité moyenne','Complexité élevée','Complexité trés élevée','Ingénieur(e)','Avocat(e)','Médecin','Cible trés trés rare','Michelle Obama'
];
const marks3= [
  'Pas de contrainte de temps','le mois prochain','Dans 1 à 2 semaine','Cette semaine','Demain','Aujourd\'hui : No comment'
];
const Body = () => {
  return (
    <div>  
      <Title text="Combien de temps durera la session ?" />
      <SliderA marks={marks} max={14} first="10 min" last="1 jour" defvalue={6}/>
      <Title text="Typologie des participants " />
      <SliderA marks={marks2} max={11} first="Tout le monde" last="Michelle Obama" defvalue={2}/>
      <Title text="Quand doit avoir lieu la session ?  " />  
      <SliderA marks={marks3} max={5} first="Pas de contrainte de temps" last="Aujourd'hui : No comment" defvalue={5}/>
    </div>
  )
}

export default Body;
