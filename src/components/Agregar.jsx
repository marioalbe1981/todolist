import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Agregar = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Agregar una tarea"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type="submit">Agregar</Button>
    </Form>
  );
};

export default Agregar;
