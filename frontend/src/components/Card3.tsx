import React from 'react'
import './myStyle.css'
//import { LogoNodejs } from 'react-ionicons'
import { camera, trash, close } from 'ionicons/icons';
import {
    IonIcon
  } from '@ionic/react';

  //import { Ionicons } from '@expo/vector-icons'; 
  
//import { IonIcon, IonItem } from "@ionic/react";
//import * as iconName from "ionicons/icons";


interface data {
    numero: string;
    frase: string;
}

function Card3(props:data) {
  return (
    <div className = 'card' >

        <div className='izquierda'>
            <div className= 'numbers' >{props.numero} </div>
            <div className= 'cardName'>{props.frase}</div>
        </div>

        <div className='iconBx'>
           <IonIcon icon={close}></IonIcon>     
        </div>

    </div>
  )
}

export default Card3;