import axios from 'axios'

import React, { useEffect } from 'react'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import {loadpermissiondata} from '../../Redux/permission/permissionslice'
import Checkbox from '@mui/material/Checkbox';
import { Box, Button, TextField } from "@mui/material";
// import Header from '../Header'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Permission.css'
import Table from "react-bootstrap/Table";
import { Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function Permission() {
  const [credentials,setCredential]=useState({ 
    contact:undefined,
    Userrole:undefined
})
    console.log(credentials)
  const [role, setRole] = React.useState('');

  const handleChange = (e) => {
    console.log(e)
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setRole(e.target.value);
    
    
  };

    // const dispatch = useDispatch();
    
    
    // useEffect(()=>{
    //  axios.get('http://localhost:5000/staff/alluser').then((result)=>
    //     dispatch(loadpermissiondata(result.data)))
         
    // },[])
    // const data = useSelector((state) => state.data);
    // console.log(data)
    const [ischecked1, setIschecked1] = React.useState('');

    const handleChange1 = (e) => {
      if(e.target.checked)
    
      {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        setIschecked1(e.target.value)}
      else{
        setIschecked1('')
        setCredential('')
      }
     
  };
  const Editcontact=()=>{
axios.put('http://localhost:5000/staff/permission',credentials)
  }
  
   

  return (  

  
    <div>
   
      <Card className='permissioncard'>
      <Form.Select aria-label="Role" style={{marginTop:"20px", marginBottom:"20px"}}>
      <option>Please Select Role</option>
      <option value="1">Technician</option>
      <option value="2">General</option>
      <option value="3">Admin</option>
      <option value="4">Supervisor</option>
    </Form.Select>
    
       {/* <Box m="20px">
    
    <FormControl variant="filled"  id="Userrole" name="Userrole" className="roleselector" sx={{ m: 1}}>
        <InputLabel id="Userrole" name="Userrole">Role</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="Userrole"
          name="Userrole" 
          onChange={handleChange}
          sx={{ gridColumn: "span 2"}}
         >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="Supervisor">Supervisor</MenuItem>
          <MenuItem  id="Userrole" name="Userrole" value="Technician">Technician</MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="General">General</MenuItem>
          <MenuItem id="Userrole" name="Userrole" value="Admin">Admin</MenuItem>
        </Select>
      </FormControl>
      <Checkbox
        fontSize='14px'
           value={"edit"}
           id="contact"
          checked={ischecked1}
          onChange={(e)=>{handleChange1(e)}}
          inputProps={{ 'aria-label': 'controlled' }}/>
</Box> */}

<Table bordered hover>
      <thead>
        <tr>
          <th>Features</th>
          <th>Capabilities</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{fontSize:"18px"}}>Contacts</td>
          <td> <FormGroup>
  <FormControlLabel control={<Checkbox />} label="View" />
  <FormControlLabel control={<Checkbox />} label="Create" />
  <FormControlLabel control={<Checkbox />} label="Edit" />
  <FormControlLabel control={<Checkbox />} label="Delete" />
  <FormControlLabel control={<Checkbox />} label="Email" />
</FormGroup></td>
          
         
        </tr>
        <tr>
          <td style={{fontSize:"18px"}}>Machines</td>
          <td><FormGroup>
  <FormControlLabel control={<Checkbox />} label="View" />
  <FormControlLabel control={<Checkbox />} label="Create" />
  <FormControlLabel control={<Checkbox />} label="Edit" />
  <FormControlLabel control={<Checkbox />} label="Delete" />
  <FormControlLabel control={<Checkbox />} label="Email" />
</FormGroup></td>
        
        </tr>
        <tr>
          <td style={{fontSize:"18px"}}>Tickets</td>
          <td><FormGroup>
  <FormControlLabel control={<Checkbox />} label="View" />
  <FormControlLabel control={<Checkbox />} label="Create" />
  <FormControlLabel control={<Checkbox />} label="Edit" />
  <FormControlLabel control={<Checkbox />} label="Delete" />
  <FormControlLabel control={<Checkbox />} label="Email" />
</FormGroup></td>
         
        </tr>
        <tr>
          <td style={{fontSize:"18px"}}>Work Order</td>
          <td><FormGroup>
  <FormControlLabel control={<Checkbox />} label="View" />
  <FormControlLabel control={<Checkbox />} label="Create" />
  <FormControlLabel control={<Checkbox />} label="Edit" />
  <FormControlLabel control={<Checkbox />} label="Delete" />
  <FormControlLabel control={<Checkbox />} label="Email" />
</FormGroup></td>
         
        </tr>
        <tr>
          <td style={{fontSize:"18px"}}>Projects</td>
          <td><FormGroup>
  <FormControlLabel control={<Checkbox />} label="View" />
  <FormControlLabel control={<Checkbox />} label="Create" />
  <FormControlLabel control={<Checkbox />} label="Edit" />
  <FormControlLabel control={<Checkbox />} label="Delete" />
  <FormControlLabel control={<Checkbox />} label="Email" />
</FormGroup></td>
         
        </tr>
       
      </tbody>
      
    </Table>
    <Button style={{backgroundColor:"blue"}} variant="primary" type="submit" onClick={Editcontact}>
        Submit
      </Button>
    </Card>

    </div>
  )
}

export default Permission;