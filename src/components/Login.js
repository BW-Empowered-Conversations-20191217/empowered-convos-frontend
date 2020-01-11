import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginFormStyle = {
    background: "white",
    margin:" 0 auto",
    boxShadow: "0px 2px 1px rgba(0, 0, 0, 0, 1)",
    left: "489px",
    right: "302px",
    width: "190px",
    borderRadius: "29.5px",
    border: "1.5px solid #5440c0",
};

const LoginForm = styled.div`
    background: white;
    margin: 0 auto;
    box-shadow: 8px 2px 2px rgba(0, 0, 0, 0, 1);
    width: 400px;
    height: 350px;
    left: 489px;
    right: 302px;
    border-radius: 29.5px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    opacity: 0.9;
`;

const LoginPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 700px;
    background: #5440c0;
`;
const Email = styled.div`
    border-radius: 29.5px;
    color: black;
    width: 80px;
    
`;
const Password = styled.div`
    width: 80px;
    border-radius: 29.5px;
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
    justify-content: center;
`;

function Login({ values, errors, touched }) {

    return (
        <LoginPage>
            <LoginForm>
                <h1> Login </h1>
                <Form>
                    
                    <Email>
                        {touched.email && errors.email && (
                            <p>{errors.email}</p>
                        )}
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            style={LoginFormStyle}
                        />
                    </Email>
                    
                    <Password>
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            style={LoginFormStyle}
                        />
                    </Password>
                    <label>
                        <Field
                            type="checkbox"
                            name="remember"
                            checked={values.remember}
                        />
                        Keep me logged in
                    </label>
                    <Button type="submit">Login</Button>

                    <Link to="/register"> Register Now</Link>
                </Form>
            </LoginForm>
        </LoginPage>
    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password, remember }) {
        return {
            email: email || "",
            password: password || "",
            remember: remember || false
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

    handleSubmit(values, { resetForm, setErrors, setSubmit }) {
        if (values.email === "taken@gmail.com") {
            setErrors({ email: "That email is already in use" });
        } else {
            axios
                .post("https://guidr-project.herokuapp.com/users/login", values)
                .then(res => {
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
})(Login);

export default FormikLoginForm;