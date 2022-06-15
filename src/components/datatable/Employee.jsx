import React, { useEffect, useState } from 'react'
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import { userColumns,UserRow } from '../../datatabledata';
import { Link } from 'react-router-dom';
  

const Datatable = () => {
const[fournisseurs,setFournisseurs]=useState([])
useEffect(()=>{
  fetch("http://localhost:8080/fournisseur/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setFournisseurs(result);
  }
)
},[])
const handleDelete= ()=>{
  
}
  const actionColumn=[{field:"action",headerName:"Action",width:200,
   renderCell:(params)=>{
return(
<div className="cellAction">
<Link to="/fournisseurs/test"style={{textDecoration:"none"}}>
   <div className="viewButton">View</div>
   </Link>
    <div className="deleteButton">Delete</div>
    <div className="updateButton">Update</div>

</div>
)
}}];

  return (
    
         <div className="datatable">
           <div className="datatabletitle">Employees
           <Link to="/employee/new/NewEmployee" style={{textDecoration:"none"}} className="newF">
             Nouveau Employee
</Link>
           </div>
      <DataGrid
        rows={fournisseurs}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    
    </div>
  )
}

export default Datatable