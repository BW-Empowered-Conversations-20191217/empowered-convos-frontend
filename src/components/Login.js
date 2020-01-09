import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = styled.div
`
background: white;
margin: 0 auto;
box-shadow: 0px 2px 1px rgba( 0, 0, 0, 0, 1);
width: 462px;
height: 419px;
left: 489px;
right: 302px;
border-radius: 29.5px;
box-shadow: 0px 2px 1px;
display: flex;
flex-direction: column;
align-items: center;

`
const LoginPage = styled.div
`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 1440px;
height: 1024px;
background: #5440C0;


`
const Email = styled.div
`
border-radius: 29.5px;
color: black;
width: 184px;
border: 2px solid #5440C0;

`
const Password = styled.div
`
color: #5440C0;
width: 184px;
border-radius: 29.5px;
border: 1px solid #5440C0;

`

const Button = styled.button
`
background: #5440C0;
width: 184px;
height: 51px;
left: 628px;
right: 579px;
border-radius: 29px;
font-size: 21px;
font-weight: bold;
color: white;
`

const LoginArea = styled.div
`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 40px;
width: 200px;
height: 100%;
`

const Title = styled.p
`
font-size: 26px;
`

function Login({ values, errors, touched }) {
console.log(touched);
return(
  <LoginPage>
     <LoginForm>
         <LoginArea>
            <div>
              <Title>User Login</Title>  
                </div> 
         
       <Form>
        <div>
         <Email>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Username" /> 
         </Email>
         <Password>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
         </Password>
         </div>
         <label>
            <Field type="checkbox" name="tos" checked={values.tos} />
            Keep Me logged in
         </label>
            <Button type='submit'>Login</Button>
        
        
            <Link to="/"> Register Now </Link>
        
            </Form> 
     </LoginArea>
        </LoginForm>
     </LoginPage>
 );
}

const FormikLoginForm = withFormik({
mapPropsToValues({ email, password, tos }) {
    return {
        email: email || "",
        password: password || "",
        tos: tos || false,
    };
},

validationSchema: Yup.object().shape({
    email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be 8 characters or longer")
        .required("Password is required")
}),

handleSubmit(values, { resetForm, setErrors, setSubmit}) {
   if (values.email === "taken@gmail.com" ) {
       setErrors({email: "That email is already in use"});
   } else {
        axios
        .post("https://guidr-project.herokuapp.com/users/login", values)
        .then (res => {
            console.log(res);
            resetForm();
            setSubmit(false);
        })
        .catch(err => {
            console.log(err);
            setSubmit(false);
        });
   }
  }
}) (Login);


export default FormikLoginForm



