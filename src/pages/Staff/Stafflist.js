import React, { useEffect, useState } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './Staff.css'
// import { Card } from '@mui/material';
import Card from 'react-bootstrap/Card';
function Stafflist() {

const[data,setData]=useState({})
useEffect(()=>{
    axios.get('http://localhost:5000/staff/alluser').then(response=>{
        setData(response.data)
        console.log(response.data)
    })
},[])

  return (
    <div className='staff'> 
    <Card className='staffcard'>
    <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-auto" className='customer_summaryhead'>
        <h4 className='customer_summary'>Staff List</h4>
        <div>
   
   <Link to="/staffform">   <button className='Customerbutton uk-button uk-button-primary'>Add New Staff</button></Link>
   
   </div>
        </div>
        
     
    </div>
  
</div>
<div class="uk-card-body">
<Table responsive className='tables'>
  <thead>
    <tr>
      <th>#</th>
      <th >Full Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Last Login</th>      
        <th>User Role</th>
       
        
       
       
   
    </tr>
  </thead>
  <tbody>
  {Array.from(data).map((row,index) =>{return(
  <tr>
        <td>{index+1}</td>
        <td>{row.displayname}</td>
        <td>{row.Email}</td>
        <td>{row.Userrole}</td>
        <td>{row.Lastlogin && new Date(row.Lastlogin).toDateString()}</td>
        <td>{row.Userrole}</td>
        
      
    
        
 
     </tr>)})} 
  </tbody>
</Table>
</div>

</Card>
</div>
  )
}

export default Stafflist