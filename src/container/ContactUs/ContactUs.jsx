import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import emailjs from 'emailjs-com';
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader';
import './ContactUs.css'

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  }

  return (
    <Container>
      <Typography variant="h2" sx={{ color: '#DCCA87', fontFamily: 'Cormorant Upright, serif', mb: 3 }}>Contact Us</Typography>
      <Box
        component="form"
        onSubmit={sendEmail}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          '& .MuiButton-root': { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" name="user_name" />
        <TextField label="Email" variant="outlined" name="user_email" />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          name="message"
        />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </Box>
      <LiveChatLoaderProvider provider="intercom" providerKey="YOUR_PROVIDER_KEY">
        <Intercom/>
      </LiveChatLoaderProvider>
    </Container>
  );
}

export default ContactUs;
