/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ProjectTitle from "./ProjectTitle";
import { useTodo } from "../../PostContext";
import ProjectListElement from "./ProjectListElement";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function ProjectList({ projectId, setProjectList }) {
  const { projectList, inputQuery } = useTodo();

  const project = projectList.find((element) => element.id === projectId);
  const projectSubList = project.projectTodo;

  ///////////////////////////////////////////////////////////////////
  const filterProjectList = projectSubList.filter((el) => {
    const filterTitle = el.title.toLowerCase().includes(inputQuery);
    const filterDescription = el.description.toLowerCase().includes(inputQuery);

    if (inputQuery === "") {
      return el;
    } else {
      return filterTitle || filterDescription;
    }
  });
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
            {filterProjectList?.map((item, index) => (
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

export default ProjectList;
