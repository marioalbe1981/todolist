import { useState } from "react";
import styled from "styled-components";
import Agregar from "./components/Agregar";
import Lista from "./components/Lista";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Title>ToDo List</Title>
      <Agregar onAddTask={addTask} />
      <Lista tasks={tasks} onDeleteTask={deleteTask} />
    </Container>
  );
};

export default App;
