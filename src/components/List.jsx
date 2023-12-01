/* eslint-disable react/prop-types */
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Box } from "@mui/material";
import ListElement from "./ListElement";
import DayTime from "./DayTime";
import { useTodo } from "../PostContext";
import EmptyList from "./EmptyList";

function List() {
  const { tasks, setTasks, inputQuery } = useTodo();

  const droppables = Date.now().toString().slice(8, 12);

  const filteredTasks = tasks.filter((el) => {
    const filterTitle = el.title.toLowerCase().includes(inputQuery);
    const filterDescription = el.description.toLowerCase().includes(inputQuery);

    const filteredList = filterTitle || filterDescription;

    if (inputQuery === "") {
      return el;
    } else {
      return filteredList;
    }
  });
  console.log(filteredTasks);

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
            {filteredTasks[0] ? (
              filteredTasks.map((task, index) => (
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
              ))
            ) : inputQuery ? (
              <EmptyList />
            ) : (
              ""
            )}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default List;
