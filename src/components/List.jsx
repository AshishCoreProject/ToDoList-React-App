/* eslint-disable react/prop-types */
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import ListElement from "./ListElement";

function List({ tasks, setTasks, deleteTask, handleEditTask, handleAddTask }) {
  const droppables = Date.now().toString().slice(8, 12);

  function handleOnDragEnd(result) {
    console.log(result);
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={droppables}>
        {(provided) => (
          <Box ref={provided.innerRef}>
            {/* //////////////////////////////////////////// */}
            {tasks.map((task, index) => (
              <ListElement
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                handleAddTask={handleAddTask}
                deleteTask={deleteTask}
                handleEditTask={handleEditTask}
                index={index}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
