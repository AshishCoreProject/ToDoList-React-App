/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Card, CardActions, CardContent, Input } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Priority from "./Priority";

function TaskForm({
  isAddTask,
  setIsAddTask,
  handleAddTask,
  handleEditTask,
  myId,
  myTitle,
  myDescription,
  myPriority,
  setOpenForm,
}) {
  const [title, setTitle] = useState(myTitle || "");
  const [description, setDescription] = useState(myDescription || "");
  const [priority, setPriority] = useState("P4");

  //   const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const id = Date.now().toString().slice(8, 12);
    //Adding a Task
    if (!myId) {
      const newTask = { id, title, description, priority };
      handleAddTask(newTask);
      setPriority("P4");
      setTitle("");
      setDescription("");
    }

    //Editing a Task
    if (myId) {
      myTitle = title;
      myDescription = description;
      myPriority = priority;
      handleEditTask(myId, myTitle, myDescription, myPriority);
      setOpenForm((value) => !value);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <>
      <Card
        sx={{
          width: "600px",
          height: "150px",
          bgcolor: "#fbffdc",
          borderWidth: "0px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Input
              type="text"
              placeholder="Task name"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              color="success"
            />

            <Input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              color="success"
            />
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Priority priority={priority} setPriority={setPriority} />

            <Button
              sx={{
                bgcolor: "#ACFFAD",
                color: "green",
                borderRadius: "10px",
                "&:hover": {
                  color: "white",
                  bgcolor: "#360982",
                  opacity: "80%",
                },
              }}
              onClick={() => {
                // logic of if we edit the form it should be closed
                if (!myId) {
                  setIsAddTask(!isAddTask);
                } else {
                  setOpenForm((value) => !value);
                }
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                bgcolor: "#3e978b",
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "#360982",
                  color: "white",
                },
              }}
              // size="small"
              variant="contained"
              type="submit"
              disabled={!(title && description)}
            >
              {myId ? "Edit" : <AddOutlinedIcon />}
            </Button>
          </CardActions>
        </form>
      </Card>
      {/* {isSubmit && <List tasks={tasks} />} */}
    </>
  );
}

export default TaskForm;
