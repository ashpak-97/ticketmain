import React,{useState} from 'react'
// import { Box, Button,  TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from 'react-bootstrap/Card';
import "./Company.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import axios from 'axios'
import { Form } from 'react-bootstrap';
function Company() {
    const [credentials, setCredentials] = useState({
        Companyname:undefined,
        address:undefined,
        City:undefined,
        state:undefined,
        Country:undefined,
        email:undefined,
        contact:undefined
          });
 
   const handleChange1 = (e) => {
              setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            };
     
  const handleClick = async (e) => {
             
          e.preventDefault();
          const data = await axios.post("http://localhost:5000/company/postcompany", credentials);
          console.log(credentials)
          
          
      }
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
      console.log(values);
    };


  return (
    <Card className='companycard'>
      <Form style={{marginTop:"10px", marginLeft:"10px", marginRight:"10px", marginBottom:"10px"}}>
      <Row className="mb-3">
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label style={{fontSize:"15px"}}>Company Logo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>Company Name</Form.Label>
          <Form.Control type="text" placeholder=""  id='Companyname'
              label="Company name"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // value={values.Companyname}
              name="Companyname"
              // error={!!touched.Companyname && !!errors.Companyname}
              // helperText={touched.Companyname && errors.Companyname}
              sx={{ gridColumn: "span 2" }}/>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label style={{fontSize:"15px"}}>Address</Form.Label>
        <Form.Control as="textarea" rows={3} 
              label="Address"
              id="address"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // value={values.address}
              name="address"
              // error={!!touched.address && !!errors.address}
              // helperText={touched.address && errors.address}
              sx={{ gridColumn: "span 2" }}/>
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{fontSize:"15px"}}>City</Form.Label>
          <Form.Control type="text" placeholder="" label="City"
              id="City"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // defaultValue={values.City}
              name="address1"
              // error={!!touched.City && !!errors.City}
              // helperText={touched.City && errors.City}
              sx={{ gridColumn: "span 4" }}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize:"15px"}}>State</Form.Label>
          <Form.Control type="text" placeholder=""  label="State"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // defaultValue={values.state}
              name="state"
              id="state"
              // error={!!touched.state && !!errors.state}
              // helperText={touched.state && errors.state}
              sx={{ gridColumn: "span 4" }}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label style={{fontSize:"15px"}}>Country Code</Form.Label>
          <Form.Control type="text" placeholder=""  id="Country"
              label="Country"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // defaultValue={values.Country}
              name="Country"
              
              // error={!!touched.Country && !!errors.Country}
              // helperText={touched.Country&& errors.Country}
              sx={{ gridColumn: "span 4" }} />
        </Form.Group>

      </Row>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontSize:"15px"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  id="email"
              // onBlur={handleBlur}
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // defaultValue={values.email}
              name="email"
              // error={!!touched.email && !!errors.email}
              // helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label style={{fontSize:"15px"}}>Phone</Form.Label>
        <Form.Control type="number" placeholder=""  
              label="Contact Number"
              // onBlur={handleBlur}
              // id="contact"
              // onChange={(e)=>{
              //   handleChange(e);handleChange1(e)
              // }}
              // defaultValue={values.contact}
              name="contact"
              // error={!!touched.contact && !!errors.contact}
              // helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 4" }} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>

      </Form>
     {/* <Box m="20px">
   

    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkoutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
       handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              id='Companyname'
              label="Company name"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.Companyname}
              name="Companyname"
              error={!!touched.Companyname && !!errors.Companyname}
              helperText={touched.Companyname && errors.Companyname}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Address"
              id="address"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.address}
              name="address"
              error={!!touched.address && !!errors.address}
              helperText={touched.address && errors.address}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Email"
              id="email"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.email}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="Number"
              label="Contact Number"
              onBlur={handleBlur}
              id="contact"
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.contact}
              name="contact"
              error={!!touched.contact && !!errors.contact}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="City"
              id="City"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.City}
              name="address1"
              error={!!touched.City && !!errors.City}
              helperText={touched.City && errors.City}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="State"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.state}
              name="state"
              id="state"
              error={!!touched.state && !!errors.state}
              helperText={touched.state && errors.state}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              id="Country"
              label="Country"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.Country}
              name="Country"
              
              error={!!touched.Country && !!errors.Country}
              helperText={touched.Country&& errors.Country}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" onClick={handleClick} color="secondary" variant="contained">
              Save
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  </Box> */}
  </Card>
  )
}
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  Companyname: yup.string().required("required"),
  address: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  state: yup.string().required("required"),
  City: yup.string().required("required"),
  Country: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  City: "",
  state: "",
};
export default Company