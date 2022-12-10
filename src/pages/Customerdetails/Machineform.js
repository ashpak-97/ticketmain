import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Machineform(props) {
    const [credentials, setCredentials] = useState({
     
        machinecode: undefined,
        machineserial: undefined,
        machinetype:undefined,
        machinedetail:undefined,
        Location:undefined,
        address :undefined,
        purchaseddate:undefined,
        warranty:undefined,
        primaryperson:undefined,
        email:undefined
       
          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            e.target.reset()
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const res = await axios.post(`http://localhost:5000/machine/addmachine/${props.data}`, credentials);
          console.log(res)

          navigate(`/customerdetails/${props.data}`)
       
    }
  return (
    <div>
    <div className='container'>
      <Form>
      <Row className="mb-3">
        <Form.Group as={Col}  >
          <Form.Label>Machine Code</Form.Label>
          <Form.Control type="text" placeholder="" controlId="formGridEmail" id="machinecode"
          onChange={handleChange}
          className="lInput" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Machine Serial Number</Form.Label>
          <Form.Control type="text" placeholder="" controlId="formGridPassword"  id="machineserial"
          onChange={handleChange}
          className="lInput"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 lInput" >
        <Form.Label>Machine Detail</Form.Label>
        <Form.Control placeholder=""  controlId="formGridAddress1" id="machinedetail"
      onChange={handleChange} />
      </Form.Group>
      <Form.Group as={Col} >
          <Form.Label>Machine Type</Form.Label>
          <Form.Select defaultValue="Choose..." controlId="formGridState"  id="machinetype"
          onChange={handleChange}
          className="lInput">
            <option>Local</option>
            <option>Staff</option>
            <option>Employee</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 lInput"  >
        <Form.Label>Machine Location</Form.Label>
        <Form.Control placeholder="" controlId="formGridAddress1" id="machinedetail"
      onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3 lInput1" >
        <Form.Label>Address</Form.Label >
        <Form.Control as="textarea" rows={3}  id="address"
          onChange={handleChange}
          className="lInput"/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col}  >
          <Form.Label>Purchase Date</Form.Label>
          <Form.Control type="date" placeholder="" controlId="formGridEmail" id="purchaseddate"
          onChange={handleChange}
          className="lInput"/>
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Warranty Date</Form.Label>
          <Form.Control type="date" placeholder="" controlId="formGridPassword"  id="warranty"
          onChange={handleChange}
          className="lInput" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}  >
          <Form.Label>Primary Contact Person</Form.Label>
          <Form.Control type="text" placeholder="" controlId="formGridEmail"  id="primaryperson"
          onChange={handleChange}
          className="lInput" />
        </Form.Group>

        <Form.Group as={Col} >
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" controlId="formGridPassword"  id="email"
        onChange={handleChange}
        className="lInput" />
        </Form.Group>
      </Row>
      {/* <Form.Group className="mb-3" controlId="formGridAddress2" >
        <Form.Label>Machine Type</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

       

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row> */}

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit"  onClick ={handleClick} className="buttonconsult">
        Save
      </Button>
      </Form>
        {/* <div className='forms'>
      
     
       
        <input
          type="Number"
          placeholder="Code"
          id="machinecode"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="Number"
          placeholder="Serial No:"
         id= "machineserial"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="Type"
          id="machinetype"
          onChange={handleChange}
          className="lInput"
        />
        <input
      type="text"
      placeholder="Machine details"
      id="machinedetail"
      onChange={handleChange}
      className="lInput"
    />
        
         <input
          type="text"
          placeholder="Address"
          id="address"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="Date"
          placeholder="Purchased Date"
          id="purchaseddate"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Warranty"
          id="warranty"
          onChange={handleChange}
          className="lInput"
        />
         <input
          type="text"
          placeholder="Primary Person"
          id="primaryperson"
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
       
      <button onClick ={handleClick} className="buttonconsult">submit</button>
       
       </div> */}
  </div>
  </div>
 );
}

export default Machineform