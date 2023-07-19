import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f7f7;
`;

const FormContainer = styled.div`
  width: 600px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const FormHeader = styled.div`
  background: dodgerblue;
  padding: 2em;
  color: #fff;
  text-align: center;
`;

const FormContent = styled.div`
  padding: 2em;
`;

const FormGroup = styled.div`
  margin-bottom: 2em;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8em;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
`;

const Button = styled.button`
  padding: 1em 2em;
  background: dodgerblue;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: darkblue;
  }
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  margin-top: 2em;
  padding: 1em;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
`;

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-100%' },
};

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      date,
      time,
      guests,
    });

    setName('');
    setDate('');
    setTime('');
    setGuests('');
    setStep(1); // reset to first step
    setFormCompleted(true);
  };

  const validateForm = () => {
    switch (step) {
      case 1:
        return name.trim().length > 0;
      case 2:
        return date.trim().length > 0 && time.trim().length > 0;
      case 3:
        return guests.trim().length > 0;
      default:
        return false;
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <FormGroup>
              <Label>Name:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </FormGroup>
            <ButtonContainer>
              <Button type="button" onClick={nextStep} disabled={!validateForm()}>
                Next
              </Button>
            </ButtonContainer>
          </>
        );
      case 2:
        return (
          <>
            <FormGroup>
              <Label>Date:</Label>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Time:</Label>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </FormGroup>
            <ButtonContainer>
              <Button type="button" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep} disabled={!validateForm()}>
                Next
              </Button>
            </ButtonContainer>
          </>
        );
      case 3:
        return (
          <>
            <FormGroup>
              <Label>Number of Guests:</Label>
              <Input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
                placeholder="Number of Guests"
              />
            </FormGroup>
            <ButtonContainer>
              <Button type="button" onClick={prevStep}>
                Back
              </Button>
              <Button type="submit" disabled={!validateForm()}>
                Confirm
              </Button>
            </ButtonContainer>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
        {formCompleted ? (
          <motion.div initial="closed" animate="open" variants={variants}>
            <FormHeader>
              <h2>Reservation Confirmed</h2>
            </FormHeader>
            <FormContent>
              <ConfirmationMessage>
                <h3>Thank you for your reservation!</h3>
                <p>We will be waiting for you on {date} at {time}.</p>
              </ConfirmationMessage>
              <ButtonContainer>
                <Button type="button" onClick={() => setFormCompleted(false)}>
                  Make another reservation
                </Button>
              </ButtonContainer>
            </FormContent>
          </motion.div>
        ) : (
          <motion.div initial="closed" animate="open" variants={variants}>
            <FormHeader>
              <h2>Reservation Form</h2>
            </FormHeader>
            <FormContent>{getStepContent()}</FormContent>
          </motion.div>
        )}
      </FormContainer>
    </FormWrapper>
  );
};

export default ReservationForm;
