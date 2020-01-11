import React, { useState } from 'react';
import { Textfield, Button } from 'react-mdl';
import '../messageform.css';

const MessageForm = (props) => {
  //TODO figure out how to integrate Twilio into sending a message. For test purposed I might have to set up a Twilio message receiving account.

  const accountSid = 'ACCT_SID';
  const authToken = 'AUTH_TKN';
  const client = require('twilio')(accountSid, authToken);
  
   
  const [recipient, setRecipient] = useState({
    name: "",
    phone: ""
  });
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(160);

  const messageHandleChange = e => {
    setCharCount(e.target.value.length);
    setMessage(e.target.value);
  };

  const recipHandleChange = e => {
    setRecipient({
      ...recipient, [e.target.name] : e.target.value
    })
    console.log(recipient)
  };

  const handleSubmit = e => {
    e.preventDefault();

    client.messages
      .create({
        body: message,
        from: '+19049991211',
        to: `+1${recipient.phone}`
    })
    .then(message => console.log(message.sid));
  }

  return (
    <div className="message-container">
      <h1>Start a Conversation</h1>

      <form className='message-form' onSubmit={handleSubmit} method="post">
        <Textfield 
          name="name"
          label='Recipient Name'
          style={{width: '300px'}}
          floatingLabel
          value={recipient.name}
          onChange={recipHandleChange}
        />
        <Textfield 
          name="phone"
          label='Recipient Phone Number (0000000000)'
          style={{width: '300px'}}
          pattern="-?[0-9]*(\.[0-9]+)?"
          error="Must be a valid phone number!"
          floatingLabel
          value={recipient.phone}
          onChange={recipHandleChange}
        />
        <Textfield 
          label='Your message...'
          style={{width: '500px'}}
          rows={5}
          maxLength="160"
          
          onChange={messageHandleChange}
        />
        <p>max {charCount}/160 characters</p>
        <Button type="submit" raised ripple>Send</Button>
      </form>
      <div className='testdiv'></div>
    </div>
  )
};

export default MessageForm;