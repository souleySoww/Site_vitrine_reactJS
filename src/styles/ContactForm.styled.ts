import styled from 'styled-components';

export const ContainerLight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const ContainerNight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  color: #fff;
`;

export const FormLight = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormNight = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const InputLight = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const InputNight = styled.input`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  background-color: #1e2021;
`;

export const TextAreaLight = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

export const TextAreaNight = styled.textarea`
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
  color: #fff;
  background-color: #1e2021;
`;

export const ButtonLight = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonNight = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #01254d;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
