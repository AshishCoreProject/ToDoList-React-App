/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import ListElement from "./ListElement";

// eslint-disable-next-line react/prop-types
function List({ tasks, deleteTask, handleEditTask, handleAddTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px inset  gray",
            borderRadius: "5px",
            marginBottom: "10px",
            boxShadow: "1px 1px 1px lightgray ",
          }}
          key={task.id}
        >
          <ListElement
            id={task.id}
            title={task.title}
            description={task.description}
            handleAddTask={handleAddTask}
            deleteTask={deleteTask}
            handleEditTask={handleEditTask}
          />
        </Box>
      ))}
    </>
  );
}

export default List;
