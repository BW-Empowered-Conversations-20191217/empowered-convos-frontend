import React, { useState } from 'react';
import { Textfield, Button } from 'react-mdl';
import '../messageform.css';

const MessageForm = (props) => {
  //TODO figure out how to integrate Twilio into sending a message. For test purposed I might have to set up a Twilio message receiving account.
  const [recipient, setRecipient] = useState({
    name: "",
    phone: ""
  });
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(160);

  const handleChange = e => {
    
  };

  const handleClick = e => {
    e.preventDefault();
  }

  return (
    <div className="message-container">
      <h1>Start a Conversation</h1>

      <form className='message-form' onSubmit={handleClick}>
        <Textfield 
          label='Recipient Name'
          style={{width: '300px'}}
          floatingLabel
          onChange={()=> {}}
        />
        <Textfield 
          label='Recipient Phone Number (0000000000)'
          style={{width: '300px'}}
          pattern="-?[0-9]*(\.[0-9]+)?"
          error="Must be a valid phone number!"
          floatingLabel
          onChange={()=> {}}
        />
        <Textfield 
          label='Your message...'
          style={{width: '500px'}}
          rows={5}
          maxLength="160"
          
          onChange={(event)=> {setCharCount(event.target.value.length)}}
        />
        <p>max {charCount}/160 characters</p>
        <Button type="submit" raised ripple>Send</Button>
      </form>
      <div className='testdiv'></div>
    </div>
  )
};

export default MessageForm;