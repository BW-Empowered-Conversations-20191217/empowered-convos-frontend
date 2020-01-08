// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC6cf643a52859f4a9c0061dd68d460290';
const authToken = '273235a54b087d64a245e6f5e0cd8cca';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19049991211',
     to: '+19375004962'
   })
  .then(message => console.log(message.sid));
