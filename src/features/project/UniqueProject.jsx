/* eslint-disable react/prop-types */
import { useState } from "react";
import AddTask from "../../components/AddTask";
import { styled } from "styled-components";
import ProjectForm from "./ProjectForm";
import ProList from "./ProList";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
`;

function UniqueProject({ Id }) {
  const [isAddTask, setIsAddTask] = useState(false);

  return (
    <>
      <ContentStyle>
        {isAddTask ? (
          <ProjectForm
            key={Id}
            Id={Id}
            isAddTask={isAddTask}
            setIsAddTask={setIsAddTask}
          />
        ) : (
          <AddTask isAddTask={isAddTask} setIsAddTask={setIsAddTask} />
        )}
        <ProList projectId={Id} />
      </ContentStyle>
    </>
  );
}

export default UniqueProject;
