import { useState } from "react";
import { Button, Card, CardActions, CardContent, Input } from "@mui/material";
// import List from "../components/List";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

// eslint-disable-next-line react/prop-types
function TaskForm({ isAddTask, setIsAddTask, handleAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { title, description };
    handleAddTask(newTask);
    // setIsSubmit(true);
    setDescription("");
    setTitle("");
  }

  return (
    <>
      <Card
        sx={{
          width: "500px",
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
            />

            <Input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button color="success" onClick={() => setIsAddTask(!isAddTask)}>
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              sx={{
                bgcolor: "#3e978b",
                borderRadius: "10px",
                "&:hover": {
                  bgcolor: "#98eecc",
                },
              }}
              size="small"
              variant="contained"
              type="submit"
              disabled={!(title && description)}
            >
              <AddOutlinedIcon />
            </Button>
          </CardActions>
        </form>
      </Card>
      {/* {isSubmit && <List tasks={tasks} />} */}
    </>
  );
}

export default TaskForm;
