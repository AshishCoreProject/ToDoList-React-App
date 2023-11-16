/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ProjectTitle from "./ProjectTitle";
import { useTodo } from "../../PostContext";
import ProjectListElement from "./ProjectListElement";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function ProList({ projectId, setProjectList }) {
  const { projectList } = useTodo();

  const project = projectList.find((element) => element.id === projectId);
  const projectSubList = project.projectTodo;

  ///////////////////////////////////////////////////////////////////
  const droppables = Date.now().toString().slice(8, 12);

  function handleOnDragEnd(result) {
    const items = Array.from(projectSubList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProjectList(items);
  }
  ///////////////////////////////////////////////////////////////////
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={droppables}>
        {(provided) => (
          <Box ref={provided.innerRef}>
            <ProjectTitle title={project.projectName} />
            {projectSubList?.map((item, index) => (
              <ProjectListElement
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                dueDate={item.dueDate}
                dueMonth={item.dueMonth}
                priority={item.priority}
                index={index}
                projectId={projectId}
              />
            ))}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ProList;
