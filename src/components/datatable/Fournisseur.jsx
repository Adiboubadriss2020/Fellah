import React, { useEffect, useState } from 'react'
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns } from '../../datatabledata';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../../../src/service/EmployeeService'
import axios from 'axios';


const Datatable = () => {

const [fournisseurs, setFournisseurs] = useState([]);  
let value=0;
const {id} = useParams(); 

const URL = `http://localhost:8080/fournisseur/update/${id}`;
const URL1=`http://localhost:8080/fournisseur/getAll`;


  const handleUpdate = (id,data) => {
 

    axios.put( `http://localhost:8080/fournisseur/update/${id}`,data).then(
      (response)=>{
              alert("Book Updated Successfully",response);
       },(error)=>{
        console.log(data);

               alert("Operation failed", error);
       }
   );
  }
  
  
  const handleDelete = (id) => {
    console.log('Printing id', id);
    EmployeeService.remove(id)
      
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

useEffect(()=>{
  getFournisseurById();
},[])
const getFournisseurById= async e =>{
  const fournisseurinfos = await axios.get(URL1);
  setFournisseurs(fournisseurinfos.data);       
}

  const actionColumn=[{field:"action",headerName:"Action",width:200,
   renderCell:(params)=>{

return(


<div className="cellAction">
<Link to="/fournisseurs/test"style={{textDecoration:"none"}}>
   </Link>
   <div className="deleteButton" >Delete</div>
</div>
 
)
}}];

  return (


         <div className="datatable">
           <div className="datatabletitle">Fournisseurs
           <Link to="/fournisseurs/new/NewFournisseur"style={{textDecoration:"none"}} className="newF">
             Nouveau Fournisseur
             
</Link>

           </div>
           
 
          
      <DataGrid
     
        rows={fournisseurs}
        columns={userColumns.concat(actionColumn) }
        pageSize={5}
        disableMultipleSelection={true}
        rowsPerPageOptions={[5]}
        onCellClick={(row)=>{
          value=row.field;
          if(value=="action"){
          handleDelete(row.id)
          }
        }}
        onRowClick={(row)=>{
          fournisseurs.map(f=>{
          if(f.id===row.id &&( row.row.nom!==f.nom || row.row.email!==f.email || row.row.adresse!==f.adresse)){
           // console.log(f.nom)
           f=row.row;
            const b = (row.row.nom,row.row.email,row.row.adresse);
            console.log(f)
            handleUpdate(f.id,f) 
          }
        })
        }}
        
      />
      
    </div>
  
  )
}

export default Datatable