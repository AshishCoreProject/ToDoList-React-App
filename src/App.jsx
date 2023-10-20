import { useState } from "react";
import styled from "styled-components";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AllOutIcon from "@mui/icons-material/AllOut";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  Typography,
} from "@mui/material";

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
          <TaskForm isAddTask={isAddTask} setIsAddTask={setIsAddTask} />
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
      </Content>

      <Footer>
        <FooterName>copyright 2023</FooterName>
      </Footer>
    </>
  );
}
// eslint-disable-next-line react/prop-types
function List({ title, description }) {
  return (
    <Box
      sx={{
        width: "500px",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "flex-start",
        flexWrap: "nowrap",
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              icon={<AllOutIcon />}
              color="success"
              checkedIcon={<CheckCircleIcon />}
              size="small"
            />
          }
          label={title}
        />
      </FormGroup>
      <Box sx={{ marginLeft: "27px", width: "400px" }}>
        <Typography variant="caption">{description}</Typography>
      </Box>
    </Box>
  );
}

// eslint-disable-next-line react/prop-types
function TaskForm({ isAddTask, setIsAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit((value) => !value);
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
            />

            <Input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
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
      {isSubmit && <List title={title} description={description} />}
    </>
  );
}
export default App;
