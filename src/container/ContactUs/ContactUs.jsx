import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid, Snackbar, Alert } from '@mui/material';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSendChat = () => {
    setChat([...chat, { message: chatMessage, sender: 'You', timestamp: new Date().getTime() }]);
    setChatMessage('');
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || subject === '' || message === '') {
      return;
    }
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    setOpenSnackbar(true);
  };

  return (
    <Box p={{ xs: 2, sm: 3, md: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom>Contact Us</Typography>

          <Box
            display="flex"
            flexDirection="column"
            component="form"
            onSubmit={handleSend}
            sx={{
              fontFamily: "'Cormorant Upright', serif",
              color: '#0C0C0C',
            }}
          >
            <TextField label="Name" variant="outlined" margin="normal" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
            <TextField label="Email" variant="outlined" margin="normal" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField label="Subject" variant="outlined" margin="normal" fullWidth value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <TextField label="Message" variant="outlined" multiline rows={4} margin="normal" fullWidth value={message} onChange={(e) => setMessage(e.target.value)} required />
            <Button variant="contained" color="primary" type="submit">Send</Button>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
              <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                Message sent successfully!
              </Alert>
            </Snackbar>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="h4" gutterBottom mt={1.5}>Live Chat</Typography>

          <Box
            display="flex"
            flexDirection="column"
            maxHeight={400}
            overflow="auto"
            p={2}
            border={1}
            borderColor="divider"
            borderRadius={2}
            sx={{
              fontFamily: "'Open Sans', sans-serif",
              color: '#545454',
              marginBottom: '1rem',
            }}
          >
            {chat.map((chatMessage, i) => (
              <Typography key={i}><strong>{chatMessage.sender}</strong>: {chatMessage.message} ({new Date(chatMessage.timestamp).toLocaleTimeString()})</Typography>
            ))}
          </Box>

          <Box display="flex" alignItems="flex-end">
            <TextField
              label="Type your message"
              variant="outlined"
              value={chatMessage}
              onChange={e => setChatMessage(e.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" onClick={handleSendChat} disabled={!chatMessage} sx={{ height: '100%', marginLeft: '1rem' }}>Send</Button>
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
