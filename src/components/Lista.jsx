import React from "react";
import styled from "styled-components";
import Tarea from "./Tarea";

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 400px;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Lista = ({ tasks, onDeleteTask }) => {
  return (
    <TaskList>
      {tasks.map((task, index) => (
        <Tarea key={index} task={task} onDelete={() => onDeleteTask(index)} />
      ))}
    </TaskList>
  );
};

export default Lista;
