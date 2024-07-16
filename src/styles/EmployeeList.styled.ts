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

export const TitleLight = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const TitleNight = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const LabelLight = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const LabelNight = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
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

export const EmployeeListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const EmployeeItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const EditButtonLight = styled(ButtonLight)`
  background-color: #ffc107;

  &:hover {
    background-color: #e0a800;
  }
`;

export const EditButtonNight = styled(ButtonNight)`
  background-color: #936f03;

  &:hover {
    background-color: #ffc107;
  }
`;

export const DeleteButtonLight = styled(ButtonLight)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;

export const DeleteButtonNight = styled(ButtonNight)`
  background-color: #910511;

  &:hover {
    background-color: #dc3545;
  }
`;
