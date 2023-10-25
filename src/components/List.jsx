import { Box, Button } from "@mui/material";
import ListElement from "./ListElement";
import BorderColorIcon from "@mui/icons-material/BorderColor";

// eslint-disable-next-line react/prop-types
function List({ tasks, deleteTask }) {
  return (
    <>
      {tasks.map((task) => (
        <Box
          sx={{
            display: "flex",
            borderBottom: "1px inset  gray",
            borderRadius: "5px",
            marginBottom: "5px",
            boxShadow: "1px 1px 1px lightgray ",
          }}
          key={task.id}
        >
          <ListElement
            id={task.id}
            title={task.title}
            description={task.description}
            deleteTask={deleteTask}
          />

          <Button sx={{ color: "#00d08aba", fontWeight: 200 }}>
            <BorderColorIcon color="black" />
          </Button>
        </Box>
      ))}
    </>
  );
}

export default List;
