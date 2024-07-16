import styled from "styled-components";

export const CardLight = styled.div
`
border: 1px solid #ddd;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 320px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #555;

    &:last-child {
      font-weight: bold;
      color: #007bff;
    }
  }

  .slot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .slot-item {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    font-size: 0.875rem;
  }
`;

export const CardNight = styled.div
`
border: 1px solid #000;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background-color: #222;
  width: 320px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
    color: #fff;

    &:last-child {
      font-weight: bold;
      color: #01254d;
    }
  }

  .slot-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .slot-item {
    background-color: #01254d;
    color: #fff;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    font-size: 0.875rem;
  }
`;