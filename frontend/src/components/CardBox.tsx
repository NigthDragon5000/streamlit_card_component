import React from 'react'
import './myStyle.css'
/*import Card from './Card'
import Card2 from './Card2'
import Card3 from './Card3'*/
import Card_general from './Card_general'


interface data {
    numero: string;
    frase: string;
    icono:string ;
    spin:boolean
}

function CardBox(props:data) {
    return (
      <div className='cardBox'>
        {/*<Card numero= {props.ks} frase="KS"  />*/}
        {/*<Card2 numero={props.gini} frase="Gini"  />*/}
        {/*<Card_general numero={props.variable} frase={props.frase} icono="circle-notch" />*/}
        <Card_general numero={props.numero} frase={props.frase} icono={props.icono} spin={props.spin}/>
      </div>
    ) 
}

export default CardBox;
