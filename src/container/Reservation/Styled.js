import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f7f7f7;
`;

export const Form = styled.form`
  width: 500px;
  padding: 2em;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9em;
  color: #333;
`;

export const Button = styled.button`
  padding: 1em;
  background: dodgerblue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: darkblue;
  }
`;
