import { useState } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskForm from "./components/TaskForm";
import List from "./components/List";
import { Box, Button, Typography } from "@mui/material";

const Header = styled.div`
  color: #3e978b;
  height: 50px;
  text-align: left;
  font-family: cursive;
  background: #f0ff42;
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
  background-color: #98eecc;
`;
const FooterName = styled.p`
  margin: 0;
`;

function App() {
  const [isAddTask, setIsAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }
  return (
    <>
      <Header className="header">
        <div>
          <BrandTitle>
            <Typography
              sx={{ color: " #3e978b", "&:hover": { color: "#54b435" } }}
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
          <Box>
            <Button
              sx={{ color: "gray" }}
              onClick={() => setIsAddTask(!isAddTask)}
            >
              <AddOutlinedIcon /> Add task
            </Button>
          </Box>
        )}
        <List tasks={tasks} />
      </Content>

      <Footer>
        <FooterName>copyright 2023</FooterName>
      </Footer>
    </>
  );
}

export default App;
