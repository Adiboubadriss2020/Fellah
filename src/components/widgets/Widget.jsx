import React from 'react'
import './widget.scss'
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import GroupIcon from '@mui/icons-material/Group';

const Widget = ({type}) => {

        
    let data;
    switch (type) {
        case "bovins":
            data={
                title:"BOVINS",
                quantite:500,
                link:"Toutes les bovins",
                icon:( 
                <PetsIcon 
                className='icon'
                style={{backgroundColor:"#CE2E17", color:"white"}}
                />
                ),
            }
            break;
            case "fournisseurs":
            data={
                title:"FOURNISSEURS",
                quantite:15,
                link:"Toutes les fournissuers",
                icon: (<PersonOutlinedIcon className='icon'
                style={{color:"white"}}
                />
                ),
            }
            break;
            case "employees":
            data={
                title:"EMPLOYEES",
                quantite:20,
                link:"Toutes les employeés",
                icon: (<GroupIcon className='icon'
                style={{backgroundColor:"#3399FF", color:"white"}}
                />
                ),
            }
            break;
            case "donneeX":
            data={
                title:"DONNESX",
                quantite:255,
                link:"Donneés....",
                icon: (<PetsIcon className='icon'
                style={{backgroundColor:"#FFFF66", color:"white"}}
                />
                
                ),
            }
            break;
    
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.quantite}</span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positif">
            <KeyboardControlKeyIcon/> 
            50%
            </div>
            {data.icon}
        </div>
    </div>
    
  )
}

export default Widget