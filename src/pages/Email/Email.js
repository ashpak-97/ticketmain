import React from 'react'
// import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Card from 'react-bootstrap/Card';
import "./Email.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

import { useState } from "react";
import axios from 'axios'
function Email() {
    const [credentials, setCredentials] = useState({
        Emailencryption:undefined,
        SMTPhost:undefined,
        SMTPport:undefined,
        SMTPusername:undefined,
        SMTPpassword:undefined,
        BCCallemails:undefined,
        Electronicsignt:undefined,

          });
 
   const handleChange1 = (e) => {
              setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
            };
     
  const handleClick = async (e) => {
             
          e.preventDefault();
          const data = await axios.post("http://localhost:5000/email/postemail", credentials);
          console.log(credentials)
          
          
      }
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const handleFormSubmit = (values) => {
      console.log(values);
    };

  return (
    <Card className='emailcard'>

<Form style={{marginTop:"10px", marginLeft:"10px", marginRight:"10px", marginBottom:"10px"}}>
{['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="SMTP"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Sendmail"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            
            label="Mail"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      <Form.Label style={{fontSize:"15px"}}>Email Encryption</Form.Label>
       <Form.Select aria-label="" 
        // id='Emailencryption'
        //       label="Email Encryption"
        //       onBlur={handleBlur}
        //       onChange={(e)=>{
        //         handleChange(e);handleChange1(e)
        //       }}
        //       value={values.Emailencryption}
        //       name="Emailencryption"
        //       error={!!touched.Emailencryption && !!errors.Emailencryption}
        //       helperText={touched.Emailencryption && errors.Emailencryption}
              sx={{ gridColumn: "span 2" }}>
     
      <option value="1">SSL</option>
      <option value="2">TLS</option>
      <option value="3">NONE</option>
    </Form.Select>

        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>SMTP Host</Form.Label>
          <Form.Control type="text" placeholder=""  
          //  label="SMTP Host"
          //     id="SMTPhost"
          //     onBlur={handleBlur}
          //     onChange={(e)=>{
          //       handleChange(e);handleChange1(e)
          //     }}
          //     value={values.SMTPhost}
          //     name="SMTPhost"
          //     error={!!touched.SMTPhost && !!errors.SMTPhost}
          //     helperText={touched.SMTPhost && errors.SMTPhost}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>SMTP Port</Form.Label>
          <Form.Control type="text" placeholder=""  
        //  id="SMTPport"
        //  onBlur={handleBlur}
        //  onChange={(e)=>{
        //    handleChange(e);handleChange1(e)
        //  }}
        //  defaultValue={values.SMTPport}
        //  name="SMTPport"
        //  error={!!touched.SMTPport && !!errors.SMTPport}
        //  helperText={touched.SMTPport && errors.SMTPport}
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>SMTP Username</Form.Label>
          <Form.Control type="text" placeholder=""  
        // label="SMTP Username"
        // onBlur={handleBlur}
        // id="SMTPusername"
        // onChange={(e)=>{
        //   handleChange(e);handleChange1(e)
        // }}
        // defaultValue={values.SMTPusername}
        // name="SMTPusername"
        // error={!!touched.SMTPusername && !!errors.SMTPusername}
        // helperText={touched.SMTPusername && errors.SMTPusername}
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>SMTP Password</Form.Label>
          <Form.Control type="password" placeholder=""  
      //  label="SMTP Password"
      //  id="SMTPpassword"
      //  onBlur={handleBlur}
      //  onChange={(e)=>{
      //    handleChange(e);handleChange1(e)
      //  }}
      //  defaultValue={values.SMTPpassword}
      //  name="SMTPpassword"
      //  error={!!touched.SMTPpassword && !!errors.SMTPpassword}
      //  helperText={touched.SMTPpassword && errors.SMTPpassword}
            />
        </Form.Group>
        <Form.Group as={Col} controlId="formGrid">
          <Form.Label style={{fontSize:"15px"}}>BCC All Email To</Form.Label>
          <Form.Control type="text" placeholder=""  
    //  label="BCC All Emails To"
    //  onBlur={handleBlur}
    //  onChange={(e)=>{
    //    handleChange(e);handleChange1(e)
    //  }}
    //  defaultValue={values.BCCallemails}
    //  name="BCCallemails"
    //  id="BCCallemails"
    //  error={!!touched.BCCallemails && !!errors.BCCallemails}
    //  helperText={touched.BCCallemails && errors.BCCallemails}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label  style={{fontSize:"15px"}}>Email Signature</Form.Label>
        <Form.Control as="textarea" rows={3}  
        //  id="Electronicsign"
        //  label="Electronic Signature"
        //  onBlur={handleBlur}
        //  onChange={(e)=>{
        //    handleChange(e);handleChange1(e)
        //  }}
        //  defaultValue={values.Electronicsign}
        //  name="Electronicsign"
         
        //  error={!!touched.Electronicsign && !!errors.Electronicsign}
        //  helperText={touched.Electronicsign&& errors.Electronicsign}
        />
      </Form.Group>

    
    
      
      <Button className='mt-2' variant="primary" type="submit" onClick={handleClick}>
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
              id='Emailencryption'
              label="Email Encryption"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.Emailencryption}
              name="Emailencryption"
              error={!!touched.Emailencryption && !!errors.Emailencryption}
              helperText={touched.Emailencryption && errors.Emailencryption}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Host"
              id="SMTPhost"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              value={values.SMTPhost}
              name="SMTPhost"
              error={!!touched.SMTPhost && !!errors.SMTPhost}
              helperText={touched.SMTPhost && errors.SMTPhost}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Port"
              id="SMTPport"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPport}
              name="SMTPport"
              error={!!touched.SMTPport && !!errors.SMTPport}
              helperText={touched.SMTPport && errors.SMTPport}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Username"
              onBlur={handleBlur}
              id="SMTPusername"
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPusername}
              name="SMTPusername"
              error={!!touched.SMTPusername && !!errors.SMTPusername}
              helperText={touched.SMTPusername && errors.SMTPusername}
              sx={{ gridColumn: "span 4" }}
            />
           
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="SMTP Password"
              id="SMTPpassword"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.SMTPpassword}
              name="SMTPpassword"
              error={!!touched.SMTPpassword && !!errors.SMTPpassword}
              helperText={touched.SMTPpassword && errors.SMTPpassword}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="BCC All Emails To"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.BCCallemails}
              name="BCCallemails"
              id="BCCallemails"
              error={!!touched.BCCallemails && !!errors.BCCallemails}
              helperText={touched.BCCallemails && errors.BCCallemails}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              id="Electronicsign"
              label="Electronic Signature"
              onBlur={handleBlur}
              onChange={(e)=>{
                handleChange(e);handleChange1(e)
              }}
              defaultValue={values.Electronicsign}
              name="Electronicsign"
              
              error={!!touched.Electronicsign && !!errors.Electronicsign}
              helperText={touched.Electronicsign&& errors.Electronicsign}
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
    Emailencryption: yup.string().email("invalid email").required("required"),
    SMTPhost: yup.string().required("required"),
    SMTPport: yup.string().required("required"),

    SMTPusername: yup.string().required("required"),
  
    BCCallemails: yup.string().required("required"),
    Electronicsign: yup.string().required("required"),

});
const initialValues = {
    Emailencryption:'',
    SMTPhost:"",
    SMTPport:"",
    SMTPusername:"",
    SMTPpassword:"",
    BCCallemails:"",
    Electronicsign:""
};
export default Email