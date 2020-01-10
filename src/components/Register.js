import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const RegFormStyle = {
    background: "white",
    margin:" 0 auto",
    boxShadow: "0px 2px 1px rgba(0, 0, 0, 0, 1)",
    left: "489px",
    right: "302px",
    width: "190px",
    borderRadius: "29.5px",
    border: "1.5px solid #5440c0",
};

const RegistrationBackground = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 700px;
background: #5440c0;
`;

const RegistrationForm = styled.div`
    background: white;
    margin: 0 auto;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0, 1);
    width: 402px;
    height: 400px;
    left: 489px;
    right: 302px;
    border-radius: 29.5px;
    display: flex; 
    flex-direction: column;
    align-items: center;
`;

const Button = styled.button`
    background: #5440c0;
    width: 184px;
    height: 41px;
    left: 628px;
    right: 579px;
    border-radius: 29.5px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    color: white;
    font-weight: bold;
    align-items: center;
`;



function Register({ values, errors, touched }) {
console.log(touched);
return(
    <RegistrationBackground>
        <RegistrationForm>
            <h1>Register</h1> 
       <Form>
        <div>

        <div>
            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type="username" name="username" placeholder="Username" style={RegFormStyle} />
        </div>
        <div>
            {touched.full_name && errors.full_name && <p>{errors.full_name}</p>}
            <Field type="name" name="name" placeholder="Name" style={RegFormStyle} />
        </div>
         <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" style={RegFormStyle} /> 
         </div>
         <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" style={RegFormStyle} />
         </div>
         <div>
             {touched.full_name && errors.full_name && <p>{errors.full_name}</p>}
         </div>
         
         </div>
         <label>
            <Field type="checkbox" name="tos" checked={values.tos} />
            Agree to Terms of Service
         </label>
            <Button type='submit'>Register</Button>
        
            </Form> 
        </RegistrationForm>    
    </RegistrationBackground>
 );
}

const FormikRegistrationForm = withFormik({
mapPropsToValues({ username, full_name, email, password, tos }) {
    return {
        username: username || "",
        full_name: full_name || "",
        email: email || "",
        password: password || "",
        tos: tos || false,
    };
},

validationSchema: Yup.object().shape({
    username: Yup.string()
        .min(8, "Username must be 8 characters or longer")
        .required("Username is Required"),
    name: Yup.string()
        .required("Name is required"),
    email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer")
        .required("Password is required")
}),

handleSubmit(values, { resetForm, setErrors, setRegistration}) {
   if (values.email === "taken@gmail.com" ) {
       setErrors({email: "That email is already in use"});
   } else {
        axios
        .post("https://guidr-project.herokuapp.com/users/signUp", values)
        .then (res => {
            console.log(res);
            resetForm();
            setRegistration(false);
        })
        .catch(err => {
            console.log(err);
            setRegistration(false);
        });
   }
  }
}) (Register);


export default FormikRegistrationForm