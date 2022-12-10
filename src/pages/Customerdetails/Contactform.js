import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Form, Button, Col, Container } from 'react-bootstrap';
function Contactform(props) {
  
    const [credentials, setCredentials] = useState({
        person: undefined,
        designation: undefined,
        email:undefined,
        mobile:undefined
          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const res = await axios.post(`http://localhost:5000/contactlist/addcontact/${props.data}`, credentials);
          console.log(res)
        navigate(`/customerdetails/${props.data}`)
    }
  return (
    <div>
    <div style={{width:"100%"}} className='container'>

<Form style={{width:"100%"}}>
<Row className="mb-3">
<Form.Group as={Col} className="mb-2 lInput" controlId="formBasicPassword" id='person' onChange={handleChange}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2 lInput" controlId="formBasicPassword" id='designation' onChange={handleChange}>
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
      </Row>
      <Form.Group className="mb-2 lInput" controlId="formBasicPassword" id='email' onChange={handleChange}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-2 lInput" controlId="formBasicPassword" id='mobile' onChange={handleChange}>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick ={handleClick} className="buttonconsult">
        Save
      </Button>
</Form>
         {/* <div className='forms'>
       
        <input
          type="text"
          placeholder="Name"
          id="person"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Designation"
          id="designation"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Mobile Number"
          id="mobile"
          onChange={handleChange}
          className="lInput"
        />
       
      <button onClick ={handleClick} className="buttonconsult">submit</button>
       
       </div>  */}
    </div>
   
   
  </div>
  )
}

export default Contactform