import React from "react";
import styled from "styled-components";

const Task = styled.li`
  background-color: #fff;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TaskText = styled.span`
  font-size: 1rem;
  color: #333;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #b02a37;
  }
`;

const Tarea = ({ task, onDelete }) => {
  return (
    <Task>
      <TaskText>{task}</TaskText>
      <DeleteButton onClick={onDelete}>Eliminar</DeleteButton>
    </Task>
  );
};

export default Tarea;
