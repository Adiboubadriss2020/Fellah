import React, { useEffect, useState } from 'react';
import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
export const New = ({inputs,title}) => {
    const[file,setFile] = useState("");
    const[nom,setNom]=useState('')
    const[adresse,setAdresse]=useState('')
    const[email,setEmail]=useState('')
    const[fournisseurs,setFournisseurs]=useState([])


    const handleClick=(e)=>{
      e.preventDefault()
      const fournisseur={nom,email,adresse}
      console.log(fournisseur)
      fetch("http://localhost:8080/fournisseur/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(fournisseur)
  
    }).then(()=>{
      console.log("New Fournisseur added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/fournisseur/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setFournisseurs(result);
    }
  )
  },[])
  return (
    <div className="new">
      <Sidebar/>
      <div className="newcontainer">
        <Navbar/>
      <div className="top">
      <h1 className="title">{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src=
          {
          file ?
           URL.createObjectURL(file) 
          : 
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
        } 
          alt="img" />
        </div>
        <div className="right">
        <form action=""  noValidate autoComplete="off">

        <div className="forminput">
            <label  htmlFor='file'>Image : <DriveFolderUploadIcon className='icon'/></label>
            <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display: 'none'}}/>
          </div>
 
         

    <div className="forminput">
 <label >Nom</label>
 <input type="text" placeholder="Enter le nom" value={nom} onChange={(e)=>setNom(e.target.value)}/>
</div>
<div className="forminput">
 <label >Email</label>
 <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div className="forminput">
 <label >Adresse</label>
 <input type="text" placeholder="Enter Adresse" value={adresse} onChange={(e)=>setAdresse(e.target.value)} required/>
</div>
          <button onClick={handleClick}>Envoyer</button>
        </form>
        

        </div>
      </div>
      </div>
    </div>
  )
}
export default New;
