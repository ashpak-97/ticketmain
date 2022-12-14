
import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'
// import { Card } from '@mui/material';
import Card from 'react-bootstrap/Card';
import "./project.css";
function Projectform() {
    const [credentials, setCredentials] = useState({
        TicketNumber:undefined,
        Opendate:undefined,
        Closedate:undefined,
        Status:undefined,
        Projectdetails:undefined,
        Contactperson:undefined,
        ContactNumber:undefined,
        Location:undefined
          });
  const navigate = useNavigate()
   const handleChange = (e) => {
              setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            };
     
  const handleClick = async (e) => {
             
          e.preventDefault();
          const data = await axios.post("http://localhost:5000/project/postproject", credentials);
          
          navigate(`/projectlist`)
      }
  return (
    <div>
      <Card className='projectdetailcard'>
    <div class="uk-card-header">
        <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
            <h4 className='customer_summary'>Add New Project</h4>
             
            </div>
        </div>
    </div>
   <div class="uk-card-body">
     <div className='customersform'>
     {/* <input type="file" id="testfield" filename="testfield" accept="image/*"/> */}
        <div className="form-group">
          <p required className='form-label field'>Ticket Number <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="TicketNumber" onChange={handleChange}  type="Number" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Open Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Opendate" onChange={handleChange}  type="Date"  />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Close Date <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control" id="Closedate" onChange={handleChange}  type="Date"  />
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Status <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <select className="form-select"  id="Status" onChange={handleChange}  type="text" >
          <option value="completed">completed</option>
            <option value="open">open</option>
            <option value="close">close</option>
            <option value="pending">pending</option>
            <option value="ongoing">ongoing</option>
            <option value="cancelled">cancelled</option>
          
          </select>
        </div>
        
        <div className="form-group">
        <p required className='form-label field'>Contact Person <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Contactperson" onChange={handleChange}  type="text" />
        </div>
        <div className="form-group">
        <p required className='form-label field'>Contact Number<strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="ContactNumber" onChange={handleChange}  type="Number" />
        </div>
       
        
        
        
      </div> 
      <div className='customersform1'>
      <div className="form-group">
        <p required className='form-label field'>Project Detail <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Projectdetails" onChange={handleChange}  type="text" />
        </div>
      <div className="form-group">
          <p required className='form-label field'>Location <strong style={{color:'red',fontSize:'15px'}}>*</strong></p>
          <input className="form-control"  id="Location" onChange={handleChange}  type="text" />
        </div>
      </div>


    
     </div>
     
     
     
     <div class="uk-card-footer">
     <div className="customerformbutton">
     <Link to='/staffs'><button className='Customerbutton uk-button uk-button-primary'>Back</button></Link>
     <button className='Customerbutton uk-button uk-button-primary'  onClick={handleClick}>submit</button>
    </div>
      
 
    
   
     </div>
    
</Card>
</div>
  )
}

export default Projectform