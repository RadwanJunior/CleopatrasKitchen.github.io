import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Reservation = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    requests: '',
  });

  const handleInputChange = (event) => {
    setReservation({ ...reservation, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('reservation', JSON.stringify(reservation));
    alert('Reservation submitted');
    setReservation({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: '',
      requests: '',
    });
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ color: '#DCCA87', fontFamily: 'Cormorant Upright, serif', mb: 3 }}>Make a Reservation</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          '& .MuiButton-root': { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name" variant="outlined" name="name" value={reservation.name} onChange={handleInputChange} />
        <TextField label="Email" variant="outlined" name="email" value={reservation.email} onChange={handleInputChange} />
        <TextField label="Phone Number" variant="outlined" name="phone" value={reservation.phone} onChange={handleInputChange} />
        <TextField label="Date (YYYY-MM-DD)" variant="outlined" name="date" value={reservation.date} onChange={handleInputChange} />
        <TextField label="Time" variant="outlined" name="time" value={reservation.time} onChange={handleInputChange} />
        <TextField label="Number of People" variant="outlined" name="people" value={reservation.people} onChange={handleInputChange} />
        <TextField label="Special Requests" variant="outlined" name="requests" value={reservation.requests} onChange={handleInputChange} />
        <Button variant="contained" color="primary" type="submit">Reserve</Button>
      </Box>
    </Container>
  );
};

export default Reservation;
