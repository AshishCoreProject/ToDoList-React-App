/* eslint-disable react/prop-types */
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import ListElement from "./ListElement";
import DayTime from "./DayTime";
import { useTodo } from "../PostContext";

function List() {
  const { tasks, setTasks } = useTodo();
  const droppables = Date.now().toString().slice(8, 12);

  function handleOnDragEnd(result) {
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
            <DayTime />
            {/* //////////////////////////////////////////// */}
            {tasks.map((task, index) => (
              <ListElement
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                index={index}
                priority={task.priority}
                dueDate={task.dueDate}
                dueMonth={task.dueMonth}
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
