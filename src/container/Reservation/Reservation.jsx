import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Typography, Button, TextField, Container } from '@mui/material';

const steps = ['Contact Information', 'Reservation Details', 'Special Requests'];

const Reservation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    requests: '',
  });

  const isStepSkipped = (step) => {
    return formData[step] === '';
  };

  const handleNext = () => {
    let newSkipped = isStepSkipped(steps[activeStep]);

    if (!newSkipped) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      alert('Please fill in all fields before proceeding');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ color: '#DCCA87', fontFamily: 'Cormorant Upright, serif', mb: 3 }}>Make a Reservation</Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 3 }}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography sx={{ mb: 2 }}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {activeStep === 0 && (
              <div>
                <TextField label="Name" variant="outlined" name="name" value={formData.name} onChange={handleInputChange} sx={{ mb: 2, mr: 2 }} />
                <TextField label="Email" variant="outlined" name="email" value={formData.email} onChange={handleInputChange} sx={{ mb: 2, mr: 2 }} />
                <TextField label="Phone Number" variant="outlined" name="phone" value={formData.phone} onChange={handleInputChange} sx={{ mb: 2 }} />
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <TextField label="Date (YYYY-MM-DD)" variant="outlined" name="date" value={formData.date} onChange={handleInputChange} sx={{ mb: 2, mr: 2 }} />
                <TextField label="Time" variant="outlined" name="time" value={formData.time} onChange={handleInputChange} sx={{ mb: 2, mr: 2 }} />
                <TextField label="Number of People" variant="outlined" name="people" value={formData.people} onChange={handleInputChange} sx={{ mb: 2 }} />
              </div>
            )}
            {activeStep === 2 && (
              <TextField label="Special Requests" variant="outlined" name="requests" value={formData.requests} onChange={handleInputChange} sx={{ mb: 2 }} />
            )}
            
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>Back</Button>
              <Button variant="contained" color="primary" onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Reservation;
