import { useState } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskForm from "./TaskForm";
import List from "./List";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";

const ContentStyle = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
`;
function MainContent() {
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  ////////////////////////////////////////////////////////////
  useEffect(() => {
    const storedArray = JSON.parse(localStorage.getItem("tasks"));
    if (storedArray) {
      setTasks(storedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  ////////////////////////////////////////////////////////////

  //Adding into the array.
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  function handleDeleteTask(id) {
    setTimeout(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    }, 300);
  }

  function handleEditTask(myId, myTitle, myDescription, myPriority) {
    const newListItem = tasks.map((item) => {
      if (item.id === myId) {
        const updatedItem = {
          ...item,
          title: myTitle,
          description: myDescription,
          priority: myPriority,
        };
        return updatedItem;
      }
      return item;
    });
    setTasks(newListItem);
  }

  return (
    <>
      <ContentStyle>
        {isAddTask ? (
          <TaskForm
            isAddTask={isAddTask}
            setIsAddTask={setIsAddTask}
            handleAddTask={handleAddTask}
            tasks={tasks}
          />
        ) : (
          <Box sx={{ width: "600px" }}>
            <Button
              sx={{
                color: "#360982",
                padding: "6px 2px",

                "&:hover": {
                  bgcolor: "#AC92FA",
                  opacity: "90%",
                  color: "#fff",
                },
              }}
              onClick={() => setIsAddTask(!isAddTask)}
            >
              <AddOutlinedIcon
                sx={{
                  color: "#360982",
                  "&:hover": {
                    bgcolor: "#AC92FA",
                    opacity: "50%",
                    color: "#fff",
                  },
                }}
              />
              Add task
            </Button>
          </Box>
        )}
        <List
          tasks={tasks}
          setTasks={setTasks}
          deleteTask={handleDeleteTask}
          handleAddTask={handleAddTask}
          handleEditTask={handleEditTask}
        />
      </ContentStyle>
    </>
  );
}

export default MainContent;
