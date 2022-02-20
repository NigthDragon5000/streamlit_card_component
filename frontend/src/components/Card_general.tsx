import React from 'react'
import './myStyle.css'
//import { FaBeer,FaHiking } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee,faSpinner,faCircleNotch,faChartBar,faChartPie} from '@fortawesome/fontawesome-free-solid'
import fontawesome from '@fortawesome/fontawesome'

interface data {
    numero: string;
    frase: string;
    icono: string;
    spin: boolean;
}

fontawesome.library.add(faCheckSquare, faCoffee,faSpinner,faCircleNotch,faChartBar,faChartPie);

function Card_general(props:data) {
  if (props.spin==true){
    return (
            <div className = 'card' >

                <div className='izquierda'>
                    <div className= 'numbers' >{props.numero} </div>
                    <div className= 'cardName'>{props.frase}</div>
                </div>

                <div className='iconBx'>
                    <FontAwesomeIcon icon={props.icono as IconName} spin /> 
                </div>

            </div>
    )
  }
  else {
    return (
        <div className = 'card' >

            <div className='izquierda'>
                <div className= 'numbers' >{props.numero} </div>
                <div className= 'cardName'>{props.frase}</div>
            </div>

            <div className='iconBx'>
                <FontAwesomeIcon icon={props.icono as IconName}  /> 
            </div>

        </div>
)

  }
  
}

export default Card_general;

