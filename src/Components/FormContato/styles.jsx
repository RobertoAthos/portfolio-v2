import styled from 'styled-components';

export const Container = styled.section`
padding-top: 10rem;
width: 100%;
max-width: 1200px;
margin: auto;
`;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
    .send-btn{
        width: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
    }
   .send-btn>button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: #0EE7B7;
    transition: 0.5s;
    width: 350px;
    }
    .send-btn>button:hover{
      background-color: #05af8a;
      transition: 300ms;
    }
  @media (max-width: 700px) {
    margin-top: 5rem;
  }
  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
      width:300px;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 350px;
  background-color:#1E253E;
  border:#313958;
  padding: 1.7rem 1.5rem;
  color: #0EE7B7;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  margin: 15px;
  &:focus {
    border-color:#0EE7B7;
  }
  &::placeholder {
    color:#0EE7B7;
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 350px;
  background: #1E253E;
  border: 1px solid #313958;
  padding: 1.7rem 1.5rem;
  color: #0EE7B7;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  margin-bottom: 15px;
  &:focus {
    border-color:#0EE7B7;
  }
  &::placeholder {
    color: #0EE7B7;
  }
  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;