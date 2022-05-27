import './featured.scss'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Featured = () => {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="title">ProgressBar</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
        <CircularProgressbar value={40} text={"40%"} styles={buildStyles({
        pathColor: `green`,
        textColor: 'gray',
        trailColor: 'lightgray',
        backgroundColor: '#3e98c7',
        })}/>
        </div>
        <p className="title">Taches</p>
        <p className="description">ghyhffhthrgrhtehthrfg fgghrgrg</p>
        <div className="important">
          
          <div className="item">
            <div className="isimportant">important</div> 
            <div className="tache">Tach1</div>
            <div className="tachedesc">payer ....</div>            
          </div>
          <div className="item">
          <div className="isimportant">important</div> 
            <div className="tache">Tach2</div>
            <div className="tachedesc">Ajouter...</div>            
          </div>
          <div className="item">
          <div className="isimportant">important</div> 
            <div className="tache">Tach3</div>
            <div className="tachedesc">Faire....</div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured