import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TaskForm from "./TaskForm";
import List from "./List";
import { Box, Button } from "@mui/material";
import { useTodo } from "../PostContext";

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
  const {
    tasks,
    setTasks,
    isAddTask,
    setIsAddTask,
    handleAddTask,
    handleDeleteTask,
    handleEditTask,
  } = useTodo();

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
