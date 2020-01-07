import React, { useState } from 'react';
import { Textfield } from 'react-mdl';
import '../messageform.css';

const MessageForm = (props) => {
  //TODO figure out how to integrate Twilio into sending a message. For test purposed I might have to set up a Twilio message receiving account.
  const [recipient, setRecipient] = useState({
    name: "",
    phone: ""
  });

  const handleChange = e => {
    
  };

  return (
    <div className="message-container">
      <h1>Time to Reach Out</h1>

      <form>
        <Textfield 
          label='Recipient Name'
          style={{width: '300px'}}
          onChange={()=> {}}
        />
        <label>Recipient Name:</label><input type='text' name='recpientphone' placeholder='phone number'/>
        <textarea name='message' rows='8' cols='50'>Write your message here...</textarea>
        <button type="submit">Send</button>
      </form>
      <div className='testdiv'></div>
    </div>
  )
};

export default MessageForm;