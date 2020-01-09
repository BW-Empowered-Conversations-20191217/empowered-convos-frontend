import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';





function Register({ values, errors, touched }) {
console.log(touched);
return(
 
       <Form>
        <div>

        <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="name" name="name" placeholder="Username" />
        </div>
         <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Username" /> 
         </div>
         <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type="password" name="password" placeholder="Password" />
         </div>
         <div>
             {touched.full_name && errors.full_name && <p>{errors.full_name}</p>}
         </div>
         
         </div>
         <label>
            <Field type="checkbox" name="tos" checked={values.tos} />
            Agree to Terms of Service
         </label>
            <button type='submit'>Register</button>
        
            </Form> 
     
 );
}

const FormikRegistrationForm = withFormik({
mapPropsToValues({ name, email, password, tos }) {
    return {
        name: name || "",
        email: email || "",
        password: password || "",
        tos: tos || false,
    };
},

validationSchema: Yup.object().shape({
    Username: Yup.string()
        .min(8, "Username must be 8 characters or longer")
        .required("Name is Required"),
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
        .post("https://guidr-project.herokuapp.com/users/signUp", values)
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
}) (Register);


export default FormikRegistrationForm