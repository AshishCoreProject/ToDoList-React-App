/* eslint-disable react/prop-types */
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
  deleteTask,
  handleEditTask,
  handleAddTask,
}) {
  let [openForm, setOpenForm] = useState(false);

  return (
    <Box
      key={id}
      sx={{
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
          control={
            <Checkbox
              icon={<AllOutIcon />}
              color="success"
              checkedIcon={<CheckCircleIcon />}
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
            setOpenForm={setOpenForm}
          />
        )}
      </Box>
    </Box>
  );
}

export default ListElement;
