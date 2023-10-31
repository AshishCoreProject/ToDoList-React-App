/* eslint-disable react/prop-types */
import { Draggable } from "react-beautiful-dnd";
import AllOutIcon from "@mui/icons-material/AllOut";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import TaskForm from "./TaskForm";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ListElement({
  id,
  title,
  description,
  priority,
  deleteTask,
  handleEditTask,
  handleAddTask,
  index,
}) {
  let [openForm, setOpenForm] = useState(false);

  function handlePriority() {
    if (priority === "P4") return <AllOutIcon sx={{ color: "gray" }} />;
    if (priority === "P3") return <AllOutIcon sx={{ color: "green" }} />;
    if (priority === "P2") return <AllOutIcon sx={{ color: "blue" }} />;
    if (priority === "P1") return <AllOutIcon sx={{ color: "red" }} />;
  }

  function handleCheckPriority() {
    if (priority === "P4") return <CheckCircleIcon sx={{ color: "green" }} />;
    if (priority === "P3") return <CheckCircleIcon sx={{ color: "green" }} />;
    if (priority === "P2") return <CheckCircleIcon sx={{ color: "blue" }} />;
    if (priority === "P1") return <CheckCircleIcon sx={{ color: "red" }} />;
  }

  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          key={id}
          sx={{
            borderBottom: "1px inset  gray",
            borderRadius: "5px",
            marginBottom: "10px",
            boxShadow: "1px 1px 1px lightgray ",

            width: "600px",
            // height: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            alignContent: "flex-start",
            flexWrap: "nowrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "600px",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <FormControlLabel
              color="black"
              control={
                <Checkbox
                  icon={handlePriority()}
                  color="success"
                  checkedIcon={handleCheckPriority()}
                  // size="medium"
                  onChange={() => deleteTask(id)}
                />
              }
              label={title}
            />
            <Button
              onClick={() => setOpenForm((value) => !value)}
              sx={{
                color: "#00d08aba",
                fontWeight: 200,
                "&:hover": {
                  color: "#360982",
                  opacity: "80%",
                },
              }}
            >
              <BorderColorIcon />
            </Button>
          </Box>
          <Box
            sx={{
              position: "relative",
              bottom: "10px",
              color: "#6a6363",
              marginLeft: "27px",
              width: "400px",
            }}
          >
            <Typography variant="caption">{description}</Typography>
          </Box>
          <Box sx={{ width: "300px" }}>
            {openForm && (
              <TaskForm
                handleAddTask={handleAddTask}
                handleEditTask={handleEditTask}
                myId={id}
                myTitle={title}
                myDescription={description}
                myPriority={priority}
                setOpenForm={setOpenForm}
              />
            )}
          </Box>
        </Box>
      )}
    </Draggable>
  );
}

export default ListElement;
