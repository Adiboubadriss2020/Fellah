import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import BarChartIcon from '@mui/icons-material/BarChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {Link} from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
export const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
        <div className='top'>
        <Link to="/"style={{textDecoration:"none"}}>
        <span className="logo">GAS</span>
        </Link>
        </div> 
        <hr />
        <div className='center'>
        <ul>
            <p className="title">MAIN</p>
            <li>
                <DashboardIcon className='icon'/>
                <Link to="/"style={{textDecoration:"none"}}>
                <span>Dashboard</span>
                </Link>
            </li>
            <p className="title">LISTES</p>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/fournisseurs"style={{textDecoration:"none"}}>
                <span>Fournissuers</span>
                </Link>
            </li>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/client"style={{textDecoration:"none"}}>
                <span>Clients</span>
                </Link>
            </li>
            <li>
                <PersonOutlinedIcon className='icon'/>
                <Link to="/employee"style={{textDecoration:"none"}}>
                <span>Employees</span>
                </Link>
            </li>
            <li>
                <PetsIcon className='icon'/>
                <Link to="/bovin"style={{textDecoration:"none"}}>
                <span>Bovin</span>
                </Link>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>
                <span>Commande</span>
            </li>
            <li>
                <EmojiNatureIcon className='icon'/>
                <span>Alimentation</span>
            </li>
            <p className="title">OBSERVATION</p>
            <li>
                <BarChartIcon className='icon'/>
                <span>Statistique</span>
            </li>
            <li>
                <CircleNotificationsIcon className='icon'/>
                <span>Notification</span>
            </li>
           
            <p className="title">ADMIN</p>
            <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            <li>
                <SettingsIcon className='icon'/>
                <span>Parametres</span>
            </li>
            <li>
                <LogoutIcon className='icon'/>
                <span>Déconnecté</span>
            </li>
        </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption" 

            onClick={() => dispatch({ type: "LIGHT" })}

            ></div>
            <div className="colorOption" 

            onClick={() => dispatch({ type: "DARK" })}
            
            >

            </div>
        </div>
    </div>
  )
}
export default Sidebar;
