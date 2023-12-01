import styled from "styled-components";
import TaskForm from "./TaskForm";
import List from "./List";
import { useTodo } from "../PostContext";
import AddTask from "./AddTask";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
`;
function MainContent() {
  const { isAddTask, setIsAddTask, inputQuery } = useTodo();

  const [progress, setProgress] = useState("");

  useEffect(() => {
    setProgress(inputQuery);
    setTimeout(() => {
      setProgress("");
    }, 2000);
  }, [inputQuery]);

  return (
    <>
      {progress && <LinearProgress color="success" />}
      <ContentStyle>
        {isAddTask ? (
          <TaskForm />
        ) : (
          <AddTask isAddTask={isAddTask} setIsAddTask={setIsAddTask} />
        )}
        <List />
      </ContentStyle>
    </>
  );
}

export default MainContent;
