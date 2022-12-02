import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 2rem;
`;

export const Form = styled.form`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .required::after {
    content: "*";
    color: red;
  }
`;

export const TextInput = styled.input`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const EmailInput = styled.input`
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const TextArea = styled.textarea`
  font-weight: bold;
  font-family: "Poppins";
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  resize: none;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  display: flex;
  line-height: 2rem;
  font-family: "Lato";
`;

export const FormButton = styled.button`
  border: 1px solid #f1f2f2;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20%;
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 5px;
  transition: transform 0.25s;
  margin-top: 1rem;
  background: transparent;
  color: #f1f2f2;
  font-family: "Poppins";

  @media screen and (max-width: 768px) {
    width: 40%;
  }

  &:hover {
    box-shadow: none;
    transition: 200ms ease-in;
    background: #f1f2f2;
    color: #090909;
  }
`;
