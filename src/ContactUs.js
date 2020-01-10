import React, { useState } from 'react';

const intialState = {
        id: "",
        email: "",
        msg: "",
        idError: "",
        emailError: "",
        msgError:""
}


const ContactUs = () => {
    const [info, setInfo] = useState(intialState);

    const onInputChange = event => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })      
    };

    const validate = () => {
        let idError= "";
        let emailError= "";
        let msgError= "";
        const id = info.id;
        const email = info.email;
        const msg = info.msg


        if (!id){
            idError = "You need a valid ID"
        } else if (id.length < 3) {
            idError = "You need a longer ID"
        }

        if (!email) {
            emailError = "You need a valid email"
        } else if (email.length < 8) {
            emailError = "You need a longer email"
        }

        if (!msg) {
            msgError = "Message cannot be blank"
        } else if (msg.length < 1) {
            emailError = "You need to type more than one letter"
        }

        if(idError || emailError || msgError) {
            setInfo({idError, emailError, msgError});

            return false;
        }
        return true;
    }



    const onFormSubmit = event => {
        event.preventDefault();
        const isValid =  validate();
        if (isValid) {
            console.log(info)
            setInfo(intialState)
        }
    };
    
    
    return (
    <div className="ContactUsContainer"> 
    <div>
        <h1> Contact Us </h1>
    </div>
    
    <form onSubmit={onFormSubmit}>
        <label> 
            Name:
            <input 
            type="text"
            placeholder="Enter Name"
            name="id" 
            onChange={onInputChange}
            value={info.id}
            />
            <div>
            {info.idError}
            </div>
        </label>
        G

        <label>
            Email: <input 
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={onInputChange} 
            value={info.email}
            />
            <div>
            {info.emailError}
            </div>
        </label>

        <label>
            Message: <input
            type="text"
            placeholder="Input Message"
            name="msg"
            onChange={onInputChange} 
            value = {info.mail}
            />
        
        </label>
        

        <button type="submit"> 
            Submit 
        </button>
        
    </form> 
    </div>
    
    );
}

export default ContactUs;