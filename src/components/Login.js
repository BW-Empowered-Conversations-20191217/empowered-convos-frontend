import React, {useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Login = ({ values, errors, touched, status }) => {
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


useEffect (() => {
    status && setEmail (email => [...email, status]);
    status && setPassword (password => [...password, status])
}, [status]);

return(
    <div className ="login-form">
        <Form>
            <label htmlFor="Email">
                Email
                <Field
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Email'
                />  
                {touched.email && errors.email(
                    <p className='errors'>{errors.email}</p>
                )}  
            </label>

            <label htmlFor='Password'>
                Password
                <Field
                    id='password'
                    type='text'
                    name='password'
                    placeholder='Password'
                />
                {touched.password && errors.password(
                    <p className= 'errors'> {errors.password}</p>
                )}
            </label>

            <button type='submit'>Submit</button>
        </Form>
        {}




    </div>
)





}

export default Login;



