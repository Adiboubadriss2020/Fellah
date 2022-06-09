export const userColumns=[
    {field:"nom",headerName:"Nom", editable: true,width:100},
    {field:"adresse",headerName:"Adresse", editable: true,width:200},
    {field:"email",headerName:"Email", editable: true,width:200},
   /* {
       field:"fournisseur",
       headerName:"Image",
      width:230,
       renderCell:(params)=>{
         return(
           <div className="cellwithImg">
             <img className="cellImg"src={params.row.img}alt="avatar"/>
             {params.row.username}
           </div>

        );
      },
    },
*/
    {
        field:"status",
        headerName:"Status",
        width:100,
        renderCell:(params)=>{
            return(
              <div className={`cellwithStatus ${params.row.status}`}>{params.row.status}
              </div>
   
           );
         },        

},

];

export const UserRow =[
    {
        id: 1, 
        username: 'Snow', 
        img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
        email:"adib@gmail.com",
        status: 'Active' ,
        age: 34
},
{
    id: 2, 
    username: 'Anas', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
    email:"adib@gmail.com",
    status: 'Active' ,
    age: 22
},
{
    id: 3, 
    username: 'Lone', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
    email:"adib@gmail.com",
    status: 'Off' ,
    age: 29
},
{
    id: 4, 
    username: 'SOWAT', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
    email:"adib@gmail.com",
    status: 'Suspended' ,
    age: 35 
},
{
    id: 5, 
    username: 'Karim', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
    email:"adib@gmail.com",
    status: 'Suspended' ,
    age: 35 
},
{
    id: 6, 
    username: 'ADIB', 
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887',
    email:"adib@gmail.com",
    status: 'Active' ,
    age: 37 
},
];