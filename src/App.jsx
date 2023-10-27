import { useState } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskForm from "./components/TaskForm";
import List from "./components/List";
import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";

const Header = styled.div`
  color: #3e978b;
  height: 50px;
  text-align: left;
  font-family: cursive;
  background: #beadfa;
`;
const BrandTitle = styled.h1`
  margin: 1px;
`;
const Content = styled.div`
  display: flex;
  height: 800px;
  padding-top: 10px;
  background-color: #fbffdc;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
`;
const Footer = styled.div`
  color: #fff;
  height: 40px;
  text-align: center;
  font-family: Archivo Black;
  background-color: #ac92fa;
`;
const FooterName = styled.p`
  margin: 0;
`;

function App() {
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

  function handleEditTask(myId, myTitle, myDescription) {
    const newListItem = tasks.map((item) => {
      if (item.id === myId) {
        const updatedItem = {
          ...item,
          title: myTitle,
          description: myDescription,
        };
        return updatedItem;
      }
      return item;
    });
    setTasks(newListItem);
  }

  return (
    <>
      <Header className="header">
        <div>
          <BrandTitle>
            <Typography
              sx={{
                color: " #360982",
                "&:hover": { color: "#360982" },
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
              variant="h5"
            >
              ToDo List App
            </Typography>
          </BrandTitle>
        </div>
      </Header>

      <Content>
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
      </Content>

      <Footer>
        <FooterName>copyright 2023</FooterName>
      </Footer>
    </>
  );
}

export default App;
