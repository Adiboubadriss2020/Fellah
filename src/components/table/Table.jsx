import React from 'react';
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const List = () => {
    const rows=[
        {
            id:"1125",
            poids:"200kg",
            race:"racexxxx",
            datearrivage:"12/25/2021",
            avatar:"https://images.unsplash.com/photo-1609668125533-1d5af8e72cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            prix:10000,
            etat:"Bien"

        },
        {
            id:"1445",
            poids:"550kg",
            race:"racexxxx",
            datearrivage:"1/05/2020",
            avatar:"https://images.unsplash.com/photo-1609668125533-1d5af8e72cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            prix:10000,
            etat:"Moyen"

        },
        {
            id:"1885",
            poids:"300kg",
            race:"racexxxx",
            datearrivage:"12/12/2021",
            avatar:"https://images.unsplash.com/photo-1609668125533-1d5af8e72cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            prix:10000,
            etat:"Malade"

        },
        {
            id:"18985",
            poids:"400kg",
            race:"racexxxx",
            datearrivage:"20/09/2021",
            avatar:"https://images.unsplash.com/photo-1609668125533-1d5af8e72cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            prix:10000,
            etat:"Bien"


        },
        {
            id:"112445",
            poids:"450kg",
            race:"racexxxx",
            datearrivage:"12/11/2020",
            avatar:"https://images.unsplash.com/photo-1609668125533-1d5af8e72cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            prix:10000,
            etat:"Moyen"
        },
    ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell className='tablecell'>BovinId</TableCell>
           <TableCell className='tablecell'>Poids</TableCell>
           <TableCell className='tablecell'>Race</TableCell>
           <TableCell className='tablecell'>Date d'arrivage</TableCell>
           <TableCell className='tablecell'>Prix</TableCell>
           <TableCell className='tablecell'>Etat</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell  className='tablecell'>{row.poids}</TableCell>
              <TableCell  className='tablecell'>
                  <div className="cellwrapper">
                  <img src={row.avatar} alt="" className="image" />
                  {row.race}
                  </div>
                 
                  </TableCell>
              <TableCell  className='tablecell'>{row.datearrivage}</TableCell>
              <TableCell  className='tablecell'>{row.prix}</TableCell>
              <TableCell  className='tablecell'>
              <span  className={`etat ${row.etat}`}>{row.etat}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default List;