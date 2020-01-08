import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login({ values, errors, touched }) {
console.log(touched);
return(
    
     <div className ="login-form">
       <Form>
     <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" /> 
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <label>
            <Field type="checkbox" name="tos" checked={values.tos} />
            Accept TOS
        </label>
            <button type='submit'>Submit</button>
        <Link to="/"> Register Now</Link>
       </Form>  
     </div>
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



